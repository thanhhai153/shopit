<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', 'C:\laragon\www\shopit\wp-content\plugins\wp-super-cache/' );
define( 'DB_NAME', 'shopit' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Dpa.m)a[{%$0J|Jtv4|qap *I0U*k>+Om|QM%cljxvAaI31;>.:C|Y?{E0=2^U^%' );
define( 'SECURE_AUTH_KEY',  '3qcM1T!7U<e-0,u.t%<43jv?)*h&Y2nB}%c=CKuH|lUT2 1.-5XVSi9O47;>G&3F' );
define( 'LOGGED_IN_KEY',    '6.Ri=Z~KA/C4%Yta@BWYqAl(m{=L6%&g,Rrgnts/:@fZ>gzMcNclVZ<1&[_G&~Vh' );
define( 'NONCE_KEY',        'pU+(=Z5^aAxxWedKe-mOqu1B*{C/!98F@n{5<Eo,hVYneE]80ba+w;YtbXOK5D7a' );
define( 'AUTH_SALT',        '=f!J!Cks[SBVvTJ[Fl)I=gn/d>2[$PD,O*uD5&OmTd_ZSX ^D*KObfd:0@Gs;%o!' );
define( 'SECURE_AUTH_SALT', '.N+=Q48LXn*aR**TbvZTW&_9Cbo:--xDPagq~U{b`}+@:Wb:/;}P[xZ .s|@gQ4b' );
define( 'LOGGED_IN_SALT',   '5eoe~tB8~^:$xq#,dqBD)Srz>;s>qHSx`E/;ASQ}7R#6)$s`,oAeQFIjU*.ann]K' );
define( 'NONCE_SALT',       '/3IeaKVe/@.Q@!Pn5=;0#pr<ruVz^i)%kKxc+A),j?w:zC{{~7t8@t0NZ|m)Ni?M' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
