<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Nathan Hass Design Prototype</title>

		<link rel="stylesheet" href="css/screen.css" type="text/css">
		<link href='http://fonts.googleapis.com/css?family=Rokkitt:400,700' rel='stylesheet' type='text/css'>
		<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
		<script type="text/javascript" src="js/modernizr/modernizr.js"></script>

		<!-- typekit stuffs
		<script type="text/javascript">
		  (function() {
		    var config = {
		      kitId: 'xpl2keo',
		      scriptTimeout: 3000
		    };
		    var h=document.getElementsByTagName("html")[0];h.className+=" wf-loading";var t=setTimeout(function(){h.className=h.className.replace(/(\s|^)wf-loading(\s|$)/g," ");h.className+=" wf-inactive"},config.scriptTimeout);var tk=document.createElement("script"),d=false;tk.src='//use.typekit.net/'+config.kitId+'.js';tk.type="text/javascript";tk.async="true";tk.onload=tk.onreadystatechange=function(){var a=this.readyState;if(d||a&&a!="complete"&&a!="loaded")return;d=true;clearTimeout(t);try{Typekit.load(config)}catch(b){}};var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(tk,s)
		  })();
		</script> -->
		
		<script type="text/javascript" src="//use.typekit.net/rus4xtl.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
	</head>
	<body class="body hp-body nav-bottom" id="about">
		<?php include("includes/nav.php"); ?>
		<div class="site-wrapper">
			<div class="project-top-img hp-top-img">
				<div class="about-width">
					<article class="l-pair about-pair">
						<div class="art-bd about-art-bd">
							<!-- <img class="about-cir" src="NathanPhoto.jpg" /> --> 
						</div> <!-- /art-bd -->
						<div class="txt-bd about-txt-bd">
							<h1 class="about-h1">Hello!</h1>
							<p class="about-txt">My name is Nathan Hass. I am a multidisciplinary designer, fueling my passion for design with my curiosity and enthusiasm for creative problem solving. Whether it's the designing and coding a responsive website, a visual identity system, or cd art direction, I approache each problem with vigor and excitement. When I'm not plugging away on design solutions, I am usually in his kitchen trying to whip up the perfect pizza.</p>
						</div> <!-- /txt-bd -->
					</article> <!-- /l-pair -->
				</div>
			</div>
			<div class="site-body site-width hp-site-body" id="work">
				<div class="l-thumbnails-mod">

				<?php include("includes/thumbnails.php"); ?>

				</div> <!-- l-thumbnails-mod -->
			</div><!-- site-body -->
		</div><!-- site-wrapper -->
		<footer class="site-footer hp-footer" id="contact">
			<div class="footer-width">
				<h3 class="footer-h3">Interested in working together?</h3>
				<p class="footer-p">I am always interested in collaborating on new projects, working with new people, and talking about design. Feel free to get in touch any time!</p>

				<ul class="sm-list">
					<li class="sm-item"><a class="sm-link" href="mailto:nathanhass@gmail.com"><i class="fa fa-envelope"></i></a></li>
					<li class="sm-item"><a class="sm-link" target="_blank" href="https://github.com/NathanHass"><i class="fa fa-github"></i></a></li>
					<li class="sm-item"><a class="sm-link" target="_blank" href="https://twitter.com/natronic"><i class="fa fa-twitter"></i></a></li>
					<li class="sm-item"><a class="sm-link" target="_blank" href="http://instagram.com/nathanhass"><i class="fa fa-instagram"></i></a></li>
					<li class="sm-item"><a class="sm-link" target="_blank" href="http://www.linkedin.com/profile/view?id=148542847"><i class="fa fa-linkedin"></i></a></li>
				</ul>
			</div>
		</footer><!-- site-footer -->

		<!-- Core scripts-->
		<script src="/js/jquery/dist/jquery.min.js"></script>
		<script src="/js/lodash/dist/lodash.min.js"></script>
		<script src="/js/respeto/dist/respeto.min.js"></script>
	
		<script src="/js/base.js"></script>
	</body>
</html>