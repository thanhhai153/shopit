<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

$message_success = $settings->get_message_success();
$back_url        = get_the_permalink();

global $post;
$post_id = is_woopb_shortcode() ? $id : $post->ID;
?>

<div class="woocommerce-product-builder">
    <form method="POST"
          action="<?php echo apply_filters( 'woopb_redirect_link_after_add_to_cart', wc_get_cart_url() ) ?>"
          class="woopb-form">
		<?php
		do_action( 'litespeed_nonce', 'woopb_nonce' );
        wp_nonce_field( 'woopb_nonce', '_nonce' )
        ?>
        <input type="hidden" name="woopb_id" value="<?php echo esc_attr( $post_id ) ?>"/>
        <h2><?php esc_html_e( 'Your chosen list', 'woocommerce-product-builder' ); ?></h2>
		<?php
		if ( is_array( $products ) && count( $products ) ) {
		?>
        <table class="woocommerce-product-builder-table">
            <thead>
            <tr>
                <th width="60%"><?php esc_html_e( 'Product', 'woocommerce-product-builder' ) ?></th>
                <th width="15%"><?php esc_html_e( 'Price', 'woocommerce-product-builder' ) ?></th>
                <th width="15%"><?php esc_html_e( 'Total', 'woocommerce-product-builder' ) ?></th>
                <th width="10%"></th>
            </tr>
            </thead>
            <tbody>
			<?php
			$index = 1;
			$total = $final_total = 0;

			foreach ( $products as $step_id => $items ) {
				foreach ( $items as $product_id => $detail ) {
					$product = wc_get_product( $product_id );
					if ( ! $product ) {
						continue;
					}

					$product_title = VI_WPRODUCTBUILDER_Data::get_product_name( $product, $detail );

					$prd_des = $product->get_short_description();

					if ( ! empty( get_the_post_thumbnail( $product_id ) ) ) {
						$prd_thumbnail = get_the_post_thumbnail( $product_id, 'thumbnail' );
					} else {
						$prd_thumbnail = wc_placeholder_img( 'thumbnail' );
					}

					$product_price = wc_get_price_to_display( $product );
					?>
                    <tr>
                        <td>
                            <div class="woopb-preview-product-col">
								<?php echo $prd_thumbnail; ?>
                                <a target="_blank" href="<?php echo get_permalink( $product_id ); ?>"
                                   class="vi-chosen_title">
									<?php echo esc_html( $product_title ); ?>
                                    x
									<?php echo esc_html( $detail['quantity'] ) ?>
                                </a>
                            </div>
                        </td>
                        <td><?php echo $product->get_price_html() ?></td>

                        <td class="woopb-total">
							<?php echo wc_price( ( $product_price ? $product_price * $detail['quantity'] : 0 ) ); ?>
                        </td>
                        <td>
							<?php do_action( 'link_external_button', $product_id ) ?>
							<?php
							$param = get_post_meta( $post_id, 'woopb-param', true );
							if ( ! isset( $param['require_product'] ) || ! $param['require_product'] ) {
								$arg_remove = array(
									'stepp'      => $step_id,
									'product_id' => $product_id,
									'post_id'    => $post_id
								);
								?>
                                <a class="woopb-step-product-added-remove"
                                   href="<?php echo wp_nonce_url( add_query_arg( $arg_remove ), '_woopb_remove_product_step', '_nonce' ) ?>"> </a>
							<?php } ?>
                        </td>
                    </tr>
					<?php
					$total       = $total + floatval( $product_price );
					$final_total = $final_total + floatval( $product_price ) * floatval( $detail['quantity'] );
				}
			} ?>
            </tbody>
            <tfoot>
            <tr class="woopb-total-preview-custom">
                <th><?php esc_html_e( 'Total', 'woocommerce-product-builder' ) ?></th>
                <th></th>
                <th class="woopb-added-products-value"><?php printf( wc_price( $final_total ) ) ?></th>
                <th></th>
            </tr>
            </tfoot>
			<?php //do_action( 'woopb_after_preview_table', $final_total ); ?>
        </table>

        <div class="woopb-buttons-group">
            <div class="woopb-button-group group-1">
                <button name='woopb_add_to_cart' class='woopb-button woopb-button-primary woopb-add-to-cart-btn'>
                    <span class="woopb-add-to-cart-icon"> </span>
                    <span class="woopb-label"><?php esc_html_e( 'Add to cart', 'woocommerce-product-builder' ); ?></span>
                </button>
            </div>
            <div class="woopb-button-group group-2">
                <a href="<?php echo esc_url( $back_url ); ?>" class="woopb-button woopb-back-to-selector">
                    <span class="woopb-back-to-selector-icon"> </span>
                    <span class="woopb-label"><?php esc_html_e( 'Back', 'woocommerce-product-builder' ) ?></span>
                </a>

				<?php
				if ( $settings->enable_email() ) { ?>
                    <a href="#" id="vi_wpb_sendtofriend" class="woopb-button">
                        <span class="vi_wpb_sendtofriend-icon"> </span>
                        <span class="woopb-label"><?php esc_html_e( 'Send email to your friend', 'woocommerce-product-builder' ) ?></span>
                    </a>
				<?php }

				if ( $settings->get_param( 'print_button' ) ) {
					?>
                    <div id="woopb-print" class="woopb-button">
                        <span class="woopb-builder-printer"> </span>
                        <span class="woopb-label"><?php esc_html_e( 'Print', 'woocommerce-product-builder' ) ?></span>
                    </div>
					<?php
				}

				if ( $settings->get_param( 'download_pdf' ) ) {
					?>
                    <div id="woopb-download-pdf" class="woopb-button">
                        <span class="woopb-icon-file-pdf"> </span>
                        <span class="woopb-label"><?php esc_html_e( 'Download PDF', 'woocommerce-product-builder' ) ?></span>
                    </div>
					<?php
				}

				if ( current_user_can( 'manage_options' ) || $settings->get_param( 'get_short_share_link' ) ) {
					$short_link_id = wc()->session->get( 'woopb_edit_short_link' );
					if ( current_user_can( 'manage_options' ) && $short_link_id ) {
						?>
                        <button type='submit' name="woopb_save_edit_short_link"
                                value="<?php echo esc_attr( $short_link_id ) ?>" class='woopb-button'>
							<?php esc_html_e( 'Save short link edited', 'woocommerce-product-builder' ); ?>
                        </button>
						<?php
					}
					?>
                    <div id='vi-wpb-get-short-share-link' class='woopb-button'>
                        <span class="woopb-get-short-link-icon"> </span>
                        <span class="woopb-label"><?php esc_html_e( 'Get short link', 'woocommerce-product-builder' ); ?></span>
                    </div>
					<?php
				}
				?>
            </div>
			<?php } ?>
        </div>
        <div class="clear"></div>
		<?php
		if ( $settings->get_share_link_enable() ) {
			?>
            <div class="woopb-share">
                <div class="woopb-field">
                    <!--                    <label class="woopb-share-label">-->
					<?php //esc_html_e( 'Share', 'woocommerce-product-builder' ) ?><!--</label>-->
                    <input type="text" class="woopb-share-link" readonly
                           value="<?php echo esc_url( $settings->get_share_link() ) ?>">
                </div>
            </div>
		<?php } ?>
    </form>
</div>
