<?php
// Add custom Theme Functions here  
function ttit_add_element_ux_builder()
{
  add_ux_builder_shortcode('title_with_cat', array(
    'name'      => __('Title With Category'),
    'category'  => __('Content'),
    'info'      => '{{ text }}',
    'wrap'      => false,
    'options' => array(
      'ttit_cat_ids' => array(
        'type' => 'select',
        'heading' => 'Categories',
        'param_name' => 'ids',
        'config' => array(
          'multiple' => true,
          'placeholder' => 'Select...',
          'termSelect' => array(
            'post_type' => 'product_cat',
            'taxonomies' => 'product_cat'
          )
        )
      ),
      'style' => array(
        'type'    => 'select',
        'heading' => 'Style',
        'default' => 'normal',
        'options' => array(
          'normal'      => 'Normal',
          'center'      => 'Center',
          'bold'        => 'Left Bold',
          'bold-center' => 'Center Bold',
        ),
      ),
      'text' => array(
        'type'       => 'textfield',
        'heading'    => 'Title',
        'default'    => 'Lorem ipsum dolor sit amet...',
        'auto_focus' => true,
      ),
      'tag_name' => array(
        'type'    => 'select',
        'heading' => 'Tag',
        'default' => 'h3',
        'options' => array(
          'h1' => 'H1',
          'h2' => 'H2',
          'h3' => 'H3',
          'h4' => 'H4',
        ),
      ),
      'color' => array(
        'type'     => 'colorpicker',
        'heading'  => __('Color'),
        'alpha'    => true,
        'format'   => 'rgb',
        'position' => 'bottom right',
      ),
      'width' => array(
        'type'    => 'scrubfield',
        'heading' => __('Width'),
        'default' => '',
        'min'     => 0,
        'max'     => 1200,
        'step'    => 5,
      ),
      'margin_top' => array(
        'type'        => 'scrubfield',
        'heading'     => __('Margin Top'),
        'default'     => '',
        'placeholder' => __('0px'),
        'min'         => -100,
        'max'         => 300,
        'step'        => 1,
      ),
      'margin_bottom' => array(
        'type'        => 'scrubfield',
        'heading'     => __('Margin Bottom'),
        'default'     => '',
        'placeholder' => __('0px'),
        'min'         => -100,
        'max'         => 300,
        'step'        => 1,
      ),
      'size' => array(
        'type'    => 'slider',
        'heading' => __('Size'),
        'default' => 100,
        'unit'    => '%',
        'min'     => 20,
        'max'     => 300,
        'step'    => 1,
      ),
      'link_text' => array(
        'type'    => 'textfield',
        'heading' => 'Link Text',
        'default' => '',
      ),
      'link' => array(
        'type'    => 'textfield',
        'heading' => 'Link',
        'default' => '',
      ),
    ),
  ));
}
add_action('ux_builder_setup', 'ttit_add_element_ux_builder');

function title_with_cat_shortcode($atts, $content = null)
{
  extract(shortcode_atts(array(
    '_id' => 'title-' . rand(),
    'class' => '',
    'visibility' => '',
    'text' => 'Lorem ipsum dolor sit amet...',
    'tag_name' => 'h3',
    'sub_text' => '',
    'style' => 'normal',
    'size' => '100',
    'link' => '',
    'link_text' => '',
    'target' => '',
    'margin_top' => '',
    'margin_bottom' => '',
    'letter_case' => '',
    'color' => '',
    'width' => '',
    'icon' => '',
  ), $atts));
  $classes = array('container', 'section-title-container');
  if ($class) $classes[] = $class;
  if ($visibility) $classes[] = $visibility;
  $classes = implode(' ', $classes);
  $link_output = '';
  if ($link) $link_output = '<a href="' . $link . '" target="' . $target . '">' . $link_text . get_flatsome_icon('icon-angle-right') . '</a>';
  $small_text = '';
  if ($sub_text) $small_text = '<small class="sub-title">' . $atts['sub_text'] . '</small>';
  if ($icon) $icon = get_flatsome_icon($icon);
  // fix old
  if ($style == 'bold_center') $style = 'bold-center';
  $css_args = array(
    array('attribute' => 'margin-top', 'value' => $margin_top),
    array('attribute' => 'margin-bottom', 'value' => $margin_bottom),
  );
  if ($width) {
    $css_args[] = array('attribute' => 'max-width', 'value' => $width);
  }
  $css_args_title = array();
  if ($size !== '100') {
    $css_args_title[] = array('attribute' => 'font-size', 'value' => $size, 'unit' => '%');
  }
  if ($color) {
    $css_args_title[] = array('attribute' => 'color', 'value' => $color);
  }
  if (isset($atts['ttit_cat_ids'])) {
    $ids = explode(',', $atts['ttit_cat_ids']);
    $ids = array_map('trim', $ids);
    $parent = '';
    $orderby = 'include';
  } else {
    $ids = array();
  }
  $args = array(
    'taxonomy' => 'product_cat',
    'include'    => $ids,
    'pad_counts' => true,
    'child_of'   => 0,
  );
  $product_categories = get_terms($args);
  $shopit_html_show_cat = '';
  if ($product_categories) {
    foreach ($product_categories as $category) {
      $term_link = get_term_link($category);
      $thumbnail_id = get_woocommerce_term_meta($category->term_id, 'thumbnail_id', true);
      if ($thumbnail_id) {
        $image = wp_get_attachment_image_src($thumbnail_id);
        $image = $image[0];
      } else {
        $image = wc_placeholder_img_src();
      }
      $shopit_html_show_cat .= '<li class="shopit_cats"><a href="' . $term_link . '">' . $category->name . '</a></li>';
    }
  }
  return '<div class="' . $classes . '" ' . get_shortcode_inline_css($css_args) . '><' . $tag_name . ' class="section-title section-title-' . $style . '"><b></b><span class="section-title-main" ' . get_shortcode_inline_css($css_args_title) . '>' . $icon . $text . $small_text . '</span>
    <span class="shopit-show-cats">' . $shopit_html_show_cat . '</span><b></b>' . $link_output . '</' . $tag_name . '></div><!-- .section-title -->';
}
add_shortcode('title_with_cat', 'title_with_cat_shortcode');

/*
* Add quick buy button go to checkout after click

* Author: vietnix.vn

*/

add_action('woocommerce_after_add_to_cart_button', 'shopit_quickbuy_after_addtocart_button');

function shopit_quickbuy_after_addtocart_button()
{

  global $product;

?>

  <style>
    .shopit-quickbuy button.single_add_to_cart_button.loading:after {

      display: none;

    }

    .shopit-quickbuy button.single_add_to_cart_button.button.alt.loading {

      color: #fff;

      pointer-events: none !important;

    }

    .shopit-quickbuy button.buy_now_button {

      position: relative;

      color: rgba(255, 255, 255, 0.05);

    }

    .shopit-quickbuy button.buy_now_button:after {

      animation: spin 500ms infinite linear;

      border: 2px solid #fff;

      border-radius: 32px;

      border-right-color: transparent !important;

      border-top-color: transparent !important;

      content: "";

      display: block;

      height: 16px;

      top: 50%;

      margin-top: -8px;

      left: 50%;

      margin-left: -8px;

      position: absolute;

      width: 16px;

    }
  </style>

  <button type="button" class="button buy_now_button">

    <?php _e('Mua ngay', 'shopit'); ?>

  </button>

  <input type="hidden" name="is_buy_now" class="is_buy_now" value="0" autocomplete="off" />

  <script>
    jQuery(document).ready(function() {

      jQuery('body').on('click', '.buy_now_button', function(e) {

        e.preventDefault();

        var thisParent = jQuery(this).parents('form.cart');

        if (jQuery('.single_add_to_cart_button', thisParent).hasClass('disabled')) {

          jQuery('.single_add_to_cart_button', thisParent).trigger('click');

          return false;

        }

        thisParent.addClass('shopit-quickbuy');

        jQuery('.is_buy_now', thisParent).val('1');

        jQuery('.single_add_to_cart_button', thisParent).trigger('click');

      });

    });
  </script>

<?php

}

add_filter('woocommerce_add_to_cart_redirect', 'redirect_to_checkout');

function redirect_to_checkout($redirect_url)
{

  if (isset($_REQUEST['is_buy_now']) && $_REQUEST['is_buy_now']) {

    $redirect_url = wc_get_checkout_url(); //or wc_get_cart_url()

  }

  return $redirect_url;
}

