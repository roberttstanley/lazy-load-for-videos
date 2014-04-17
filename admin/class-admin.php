<?php
/**
 * Create options panel (http://codex.wordpress.org/Creating_Options_Pages)
 * @package Admin
 */

class LAZYLOAD_Admin {

	function __construct() {
		add_action( 'admin_init', array( $this, 'lazyload_enqueue_jquery' ) );
		add_action('admin_menu', array( $this, 'lazyload_create_menu' ));
		add_action('admin_init', array( $this, 'register_lazyload_settings' ));
		add_action('admin_footer', array( $this, 'll_admin_js' ) );
	}

	/**
	 * Enable jQuery (comes with WordPress)
	 */
	function lazyload_enqueue_jquery() {
    	wp_enqueue_script('jquery');
    	wp_enqueue_script('jquery-ui-tabs');
	}

	function lazyload_create_menu() {
		add_options_page('Lazy Load for Videos', 'Lazy Load for Videos', 'manage_options', 'lazyload.php', array( $this, 'lazyload_settings_page' ));
	}

	function register_lazyload_settings() {
		// Youtube
		register_setting( 'lly-settings-group', 'lly_opt' );
		register_setting( 'lly-settings-group', 'lly_opt_title' );

		// Vimeo
		register_setting( 'llv-settings-group', 'llv_opt' );
		register_setting( 'llv-settings-group', 'llv_opt_title' );

		// Other
		register_setting( 'll-settings-group', 'll_opt_customcss' );
		register_setting( 'll-settings-group', 'll_opt_customcss' );
	}

	function lazyload_settings_page()	{ ?>


	<div id="tabs" class="ui-tabs">
		<h2>Lazy Load for Videos</h2>

	    <?php $active_tab = isset( $_GET[ 'tab' ] ) ? $_GET[ 'tab' ] : 'lly_options'; ?>  



		<ul class="ui-tabs-nav">    
	        <li><a href="#tabs-1" class="nav-tab <?php echo $active_tab == 'lly_options' ? 'nav-tab-active' : ''; ?>">Youtube</a></li>
	    	<li><a href="#tabs-2" class="nav-tab <?php echo $active_tab == 'llv_options' ? 'nav-tab-active' : ''; ?>">Vimeo</a></li>
	        <li><a href="#tabs-3" class="nav-tab <?php echo $active_tab == 'll_options' ? 'nav-tab-active' : ''; ?>">Other</a></li>
	    </ul>

  <div id="tabs-1">
    <p>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>
  </div>
  <div id="tabs-2">
    <p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.</p>
  </div>
  <div id="tabs-3">
    <p>Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.</p>
    <p>Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.</p>
  </div>
		
		<form method="post" action="options.php">
			<table class="form-table">
			<?php

			// Tab "Youtube"
			if( $active_tab == 'lly_options' ) {  
	         	settings_fields( 'lly-settings-group' );
		   		do_settings_sections( 'lly-settings-group' ); ?>
		        <tr valign="top">
			        <th scope="row">NOT use Lazy Load for Youtube</th>
			        <td>
						<input name="lly_opt" type="checkbox" value="1" <?php checked( '1', get_option( 'lly_opt' ) ); ?> /> <span>If checked, Lazy Load will not be used for <b>Youtube</b> videos.</span>
			        </td>
		        </tr>
		        <tr valign="top">
			        <th scope="row"><span style="color:#f60;">New!</span> Display Youtube title</th>
			        <td>
						<input name="lly_opt_title" type="checkbox" value="1" <?php checked( '1', get_option( 'lly_opt_title' ) ); ?> /> <span>If checked, the Youtube video title will be displayed on preview image.</span>
			        </td>
		        </tr>
		        <p><span style="color:#f60;">Important:</span> Changes will only affect new posts and posts you update afterwards. (Open the post editor and update/save your post again.)</p>
			<?php }

			// Tab "Vimeo"
			elseif( $active_tab == 'llv_options' ) {  
	         	settings_fields( 'llv-settings-group' );
		   		do_settings_sections( 'llv-settings-group' ); ?>
		        <tr valign="top">
			        <th scope="row">NOT use Lazy Load for Vimeo</th>
			        <td>
						<input name="llv_opt" type="checkbox" value="1" <?php checked( '1', get_option( 'llv_opt' ) ); ?> /> <span>If checked, Lazy Load will not be used for <b>Vimeo</b> videos.</span>
			        </td>
		        </tr>
		        <tr valign="top">
			        <th scope="row"><span style="color:#f60;">New!</span> Display Vimeo title</th>
			        <td>
						<input name="llv_opt_title" type="checkbox" value="1" <?php checked( '1', get_option( 'llv_opt_title' ) ); ?> /> <span>If checked, the Vimeo video title will be displayed on preview image.</span>
			        </td>
		        </tr>
		        <p><span style="color:#f60;">Important:</span> Changes will only affect new posts and posts you update afterwards. (Open the post editor and update/save your post again.)</p>
			<?php }

			// Tab "Other"
	        else {  
		    	settings_fields( 'll-settings-group' );	
		    	do_settings_sections( 'll-settings-group' ); ?>
		        <tr valign="top">
		        	<th scope="row">Custom CSS</th>
		        	<td>
		        		<textarea rows="14" cols="70" type="text" name="ll_opt_customcss"><?php echo get_option('ll_opt_customcss'); ?></textarea>
		        	</td>
		        </tr>
			<?php } ?>

			</table>
		    <?php submit_button(); ?>
		</form>

	    <table class="form-table">
	        <tr valign="top">
		        <th scope="row" style="width:100px;"><a href="http://kevinw.de/ll" target="_blank"><img src="http://www.gravatar.com/avatar/9d876cfd1fed468f71c84d26ca0e9e33?d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536&s=100" style="-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;"></a></th>
		        <td style="width:200px;">
		        	<p><a href="http://kevinw.de/ll" target="_blank">Kevin Weber</a> &ndash; that's me.<br>
		        	I'm the developer of this plugin. I hope you enjoy it!</p>
		        </td>
		        <td>
					<p><b>It's free!</b> Support me with <a href="http://kevinw.de/donate/LazyLoadVideos/" title="Pay him something to eat" target="_blank">a delicious lunch</a> and give this plugin a 5 star rating <a href="http://wordpress.org/support/view/plugin-reviews/lazy-load-for-videos?filter=5" title="Vote for Lazy Load for Videos" target="_blank">on WordPress.org</a>.</p>
		        </td>
		        <td>
					<p>Another great plugin: <a href="http://kevinw.de/ll-ind" title="Inline Comments" target="_blank">Inline Comments</a>.</p>
		        </td>
	        </tr>
	    </table>
	</div>
	<?php
	}

	function ll_admin_js() {
	    wp_enqueue_script( 'll_admin_js', plugins_url( '../js/min/admin-ck.js' , __FILE__ ) );
	}

}

function initialize_lazyload_admin() {
	$lazyload_admin = new LAZYLOAD_Admin();
}
add_action( 'init', 'initialize_lazyload_admin' );
?>