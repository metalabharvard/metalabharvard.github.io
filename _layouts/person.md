---
layout: default
---
<div class='person'>

	<div class='left-bar'>
		<img src='../../assets/people/{{ page.slug }}.jpg' class='photo'>
		{{ page.title }}<br />
		
		{% if page.twitter %}<i class="fa fa-twitter" aria-hidden="true"></i><a href='http://twitter.com/{{ page.twitter }}' target='_blank'>{{ page.twitter }}</a><br />{% endif %}
		
		{% if page.instagram %}<i class="fa fa-instagram" aria-hidden="true"></i><a href='http://instagram.com/{{ page.instagram }}' target='_blank'>{{ page.instagram }}</a><br />{% endif %}

		{% if page.website %}<a href='{% unless page.website contains 'http://' %}http://{% endunless %}{{ page.website }}' target='_blank'>{{ page.website }}</a><br />{% endif %}

		
		<div class='extras'>
			{% if page.tools-materials %}
				<p>
					Favorite tools & materials:<br />
					{% for material in page.tools-materials %}
						{{ material }} / 
					{% endfor %}
				</p>
			{% endif %}
		</div>

	</div>
	
	<div class='right-bar'>
		<div class='title'><b>{{ page.name }}</b><br /></div>
		{%if page.quote %}<p><span class='quote'>{{ page.quote }}</span></p>{% endif %}
		<div class='content'><p>{{ content }}</p></div>
	</div>

</div>