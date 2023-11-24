<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}


do_action( 'woocommerce_product_builder_step_title', $id );
?>
    <div class="woocommerce-product-builder-sidebar-outer">
		<?php do_action( 'woocommerce_product_builder_before_content', $id, $products, $max_page ); ?>
    </div>

    <div class="woocommerce-product-builder-wrapper">

        <div class="woocommerce-product-builder-center">

            <div class="woocommerce-product-builder-content">
				<?php do_action( 'woocommerce_product_builder_content_header', $id, $products, $max_page ); ?>

                <div class="woopb-products">
					<?php
					wpb_get_template( 'product-template.php', array( 'id' => $id, 'products' => $products, 'max_page' => $max_page, 'step_error' => $step_error ) );
					?>
                </div>
                <div class="woopb-products-searched"></div>

            </div>
			<?php do_action( 'woocommerce_product_builder_center', $products, $max_page ); ?>

        </div>
        <div class="woocommerce-product-builder-right">

			<?php
			do_action( 'woocommerce_product_builder_right', $id, $products, $max_page );
			?>
        </div>
    </div>
<?php
do_action( 'woocommerce_product_builder_after', $id, $products, $max_page );

