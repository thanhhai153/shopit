<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitb444ff49c7cb444407b7aff4cfeca591
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInitb444ff49c7cb444407b7aff4cfeca591', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitb444ff49c7cb444407b7aff4cfeca591', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitb444ff49c7cb444407b7aff4cfeca591::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
