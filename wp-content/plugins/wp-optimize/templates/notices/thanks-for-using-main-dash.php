<?php if (!defined('WPO_PLUGIN_MAIN_PATH')) die('No direct access allowed'); ?>

<div id="wp-optimize-dashnotice" class="updated">

	<div style="float: right;"><a href="#" onclick="jQuery('#wp-optimize-dashnotice').slideUp(); jQuery.post(ajaxurl, {action: 'wp_optimize_ajax', subaction: 'dismiss_dash_notice_until', nonce: '<?php echo esc_js(wp_create_nonce('wp-optimize-ajax-nonce')); ?>'});"><?php printf(esc_html__('Dismiss (for %s months)', 'wp-optimize'), 12); ?></a></div>

	<h3><?php esc_html_e('Thank you for installing WP-Optimize!', 'wp-optimize'); ?></h3>

	<a href="https://getwpo.com" target="_blank"><img style="border: 0px; float: right; width: 150px; margin-right: 40px;" alt="WP-Optimize" title="WP-Optimize" src="<?php echo esc_url(WPO_PLUGIN_URL.'images/logo/wpo_logo_small.png'); ?>"></a>

	<div id="wp-optimize-dashnotice-wrapper" style="max-width: 800px;">

		<p>
			<?php esc_html_e('Super-charge and secure your WordPress site even more with our other top plugins:', 'wp-optimize'); ?>
		</p>

		<p>
			<?php printf(esc_html__('%s offers powerful extra features and flexibility, and WordPress multisite support.', 'wp-optimize'), '<strong>'.$wp_optimize->wp_optimize_url('https://getwpo.com', 'WP-Optimize Premium', '', '', true).'</strong>'); ?>
		</p>

		<p>
			<?php printf(esc_html__('%s simplifies backups and restoration.', 'wp-optimize') . ' ' . esc_html__('It is the world\'s highest ranking and most popular scheduled backup plugin, with over three million currently-active installs.', 'wp-optimize'), '<strong>'.$wp_optimize->wp_optimize_url('https://wordpress.org/plugins/updraftplus/', 'UpdraftPlus', '', '', true).'</strong>'); ?>
		</p>

		<p>
			<?php printf(esc_html__('%s is a highly efficient way to manage, optimize, update and backup multiple websites from one place.', 'wp-optimize'), '<strong>'.$wp_optimize->wp_optimize_url('https://updraftcentral.com', 'UpdraftCentral', '', '', true).'</strong>'); ?>
		</p>

		<p>
			<?php echo '<strong>'.esc_html__('More quality plugins', 'wp-optimize').': </strong>'.$wp_optimize->wp_optimize_url('https://www.simbahosting.co.uk/s3/shop/', __('Premium WooCommerce plugins', 'wp-optimize'), '', '', true); ?>
		</p>

	</div>
	<p>&nbsp;</p>
</div>
