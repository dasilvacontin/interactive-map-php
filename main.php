<?php
/*
Plugin Name: Interactive Map
Version: 0.1.0
Author: dasilvacontin
Author URI: http://dasilvacont.in
Text Domain: interactive-map
Domain Path: /interactive-map
*/

function interactive_map_handler( $atts ) {
  ob_start();
?>
<link rel="stylesheet" type="text/css" media="all" href="/wp-content/plugins/interactive_map/style.css">
<!--div id="condicion"><?php $url= $_SERVER["REQUEST_URI"]; if ($url == "/en/hospitales-e-investigadores-en/"){ echo "URI: " . $url;} ?></div-->
<div id="mapModule">
  <div id="mapWrapper" style="display: block;">
		<img src="<?php echo $atts["logo"]; ?>" id="mapLogo" width="190">
    <div id="rsr" mapcolor="<?php echo $atts["mapcolor"]; ?>"></div>
  </div>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script><br>
	<script src="/wp-content/plugins/interactive_map/xmlfunctions-min.js"></script><br>
	<script src="/wp-content/plugins/interactive_map/raphael-min.js"></script><br>
	<script src="/wp-content/plugins/interactive_map/spainmap-min.js"></script><br>
	<script src="/wp-content/plugins/interactive_map/mapModule-min.js"></script></p>
</div>
<?php
  return ob_get_clean();
}

add_shortcode( 'interactive_map', 'interactive_map_handler' );
?>
