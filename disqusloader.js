function load_disqus( ) {
	var disqus_trigger = document.getElementById('disqus_trigger'),
		disqus_target  = document.getElementById('disqus_thread'),
		disqus_embed   = document.createElement('script'),
		disqus_hook    = (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]);
  
	if( disqus_target && disqus_trigger ) {
	  disqus_embed.type = 'text/javascript';
	  disqus_embed.async = true;
	  disqus_embed.src = '//nhaka-yevashona.disqus.com/embed.js';
	  disqus_hook.appendChild(disqus_embed);
	  disqus_trigger.remove();
	}
  }