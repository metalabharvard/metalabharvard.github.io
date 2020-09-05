---
layout: default
custom_js:
- isotope_min
---


<script type="text/javascript">
	function show_popup(type,image,url){
		$('.media_popup').show();
		var content_w = 0;
		var content_h = 0;
		var content = new Image();
		content.onload = function() {
			content_w = this.width;
			content_h = this.height;
			if(content_h > $('.media_popup .inner').height()){
				content.height = $('.media_popup .inner').height();
			}
		}

		content.src = image;
		if(type == "vimeo"){
			content = '<iframe src="'+url+'" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
		}
		$('.media_popup .inner').html(content);
	}
	function hide_popup(){
		$('.media_popup').hide();
	}
	function myFunction(){
		console.log('load')
	}
</script>


<div class="nav fontsize_1">
	{% if page.type == person %}
		<a class="fontcolor_b" href="/about">< about</a>
	{% elsif page.type == "teaching" %}

		<a class="fontcolor_b" href="/teaching">< teaching</a>	
	{% else %}
		{{ page.type }}

		<a class="fontcolor_b" href="/{{ page.type }}s">< {{ page.type }}s</a>
	{% endif %} 
</div>


<div class='project'>
<div class='project_left'><div class='project_inner'>

	<div class='left-bar'>
	
	<div class='project_metadetails fontsize_1'>
	
		<span class="obj_meta_type">{% if type == person %}Name:{% else %}Title:{% endif %}</span>
		<span class="obj_meta_tab2">{{ page.name }}{% if type == person %} {{page.lastname}}{% endif %}</span>
		{% if page.author %}
			</br>
			<span class="obj_meta_type">Author(s):</span>
			<span class="obj_meta_tab2">{{page.author}}</span>
		{% endif %}
		{% if page.year %}
			</br>
			<span class="obj_meta_type">Date:</span>
			<span class="obj_meta_tab2">{% if page.fulldate %}{{page.fulldate}}{% else %}{{ page.year }}{% endif %}</span>
		{% endif %}

		{% if page.publisher %}
			</br>
			<span class="obj_meta_type">Publisher:</span>
			<span class="obj_meta_tab2">{% if page.publisher-link %}
				<a href="{{page.publisher-link}}">{{page.publisher}}</a>
			{% else %}{{ page.publisher }}{% endif %}</span>
		{% endif %}

		{% if page.type == person %}
	
			{% if page.title %}
				</br>
				<span class="obj_meta_type">Title:</span>
				<span class="obj_meta_tab2">
					{{ page.title }}
				</span>
			{% endif %}
		{% endif %}
		
		{% if page.twitter %}
			</br>
			<span class="obj_meta_type">Twtr::</span>
			<span class="obj_meta_tab2">
				<a href="https://twitter.com/{{ page.twitter }}" target="_blank">{{ page.twitter }}</a>
			</span>
		{% endif %}	

		{% if page.instagram %}
			</br>
			<span class="obj_meta_type">Insta:</span>
			<span class="obj_meta_tab2">
				<a href="https://instagram.com/{{ page.instagram }}" target="_blank">{{ page.instagram }}</a>
			</span>
		{% endif %}	
		
		{% if page.website %}
			</br>
			<span class="obj_meta_type">Port:</span>
			<span class="obj_meta_tab2">
				<a href='http://{{ page.website }}' target='_blank'>{{ page.website }}</a>
			</span>
		{% endif %}

		{% if page.email %}
			</br>
			<span class="obj_meta_type">Email:</span>
			<span class="obj_meta_tab2">
				<a href='mailto:{{ page.email }}'>{{ page.email }}</a>
			</span>
		{% endif %}		




		<!--				
		{% if page.context %}
			</br>
			<span class="obj_meta_type">Context:</span>
			<span class="obj_meta_tab2">
				{{ page.context }}
			</span>
		{% endif %}
-->
		{% if page.year == 2016 %}
			</br>
			<span class="obj_meta_type">Status:</span>
			<span class="obj_meta_tab2">Active</span>
		{% endif %}	


		{% if page.location %}
			</br>
			<span class="obj_meta_type">Location:</span>
			<span class="obj_meta_tab2">{{ page.location }}</span>
		{% endif %}	
					
	</div><!--end project_metadetails-->	
	<!--</div>
	
	<div class='right-bar'>-->


		{%if page.quote %}
			<div style="margin: 50px 0;" class="fontsize_3">{{ page.quote }}</div>
		{% endif %}
		
			
		{%if page.tweet-summary %}
			<div style="margin: 50px 0;" class="fontsize_3">{{ page.tweet-summary }}</div>
		{% endif %}
	
		{% if page.research-questions %}
			<div class="obj_meta research_questions fontsize_2">
				{% for question in page.research-questions %}
					{{ question }} <br />
				{% endfor %}
			</div>
		{% endif %}	
	
		
		<div class="content" style="margin: 50px 0">{{ content }}</div>
	

	<div class='project_metadetails fontsize_1'>
			
		{% if page.contact-person %}
			</br>
			<span class="obj_meta_type">Contact:</span></br>
			<div class="obj_meta">
				<a href='{% if page.sub %}../{% endif %}../../people/{{ page.contact-person }}'>{{page.contact-person}}</a> \\ <a href='mailto:{{ page.contact-email }}'>email</a>
			</div>
		{% endif %}
		
		{% if page.collaborators %}
			</br>
			<span class="obj_meta_type">Collaborators:</span></br>
			<div class="obj_meta">
				 {{ page.collaborators }}
			</div>
		{% endif %}				
		
		{% if page.technologies %}
			</br>
			<span class="obj_meta_type">What's it made with:</span></br>
			<div class="obj_meta">
				{{ page.technologies }}
			</div>
		{% endif %}

		{% if page.links %}
			<br>
			<span class="obj_meta_type">Links:</span></br>
			<div class="obj_meta">
			{% for link in page.links %}
				<a href='{{ link.url }}' target='_blank'>{{ link.title }}</a>,
			{% endfor %}
			</div>
		{% endif %}		

		{% if page.press %}
			<br>
			<span class="obj_meta_type">Press:</span></br>
			<div class="obj_meta">
			{% for link in page.press %}
				<a href='{{ link.url }}' target='_blank'>{{ link.title }}</a>,
			{% endfor %}
			</div>
		{% endif %}		

		{% if page.opportunities-for-involvement %}
			<br>
			<span class="obj_meta_type">Opportunities for involvement:</span></br>
			<div class="obj_meta">
				 {{ page.opportunities-for-involvement }}			
			</div>
		{% endif %}		
			
		{% if page.bibliography %}
			</br>
			<span class="obj_meta_type">Bibliography / Inspiration:</span></br>
			<span class="obj_meta">
			{% for link in page.bibliography %}
				<a href='{{ link.url }}' target='_blank'>{{ link.title }}</a>,
			{% endfor %}
			</span>
		{% endif %}	

	</div><!--end project_metadetails-->	

		
	</div><!--end left-bar-->

</div></div><!--end .project_left .project_inner-->

<div class='project_right fontsize_1'><div class='project_inner'>
	<div class="grid-sizer"></div>
	
	{% if page.type == person %}
		<div class="grid-item short">
			<div class="elem_inner" onclick="show_popup('{{ medium.type }}','../../assets/people/{{ page.slug }}.jpg','{{ medium.url }}')">
				<div class="image cover medium_thumb" role="img" aria-label="{% if page.alt-text %}{{page.alt-text}}{% else %}{{page.name}} {{page.lastname}}{% endif %}" style="background-image:url('../../assets/people/{{ page.slug }}.jpg')">
				</div>
				<div class='text'>
					<span class="sub-title"><b>img 0</b></span>
				</div>
			</div>	
		</div>
	{% else %}
		{% if page.media %}
			{% for medium in page.media %}
				<div class="grid-item short {{ medium.stat }}">
					<div class="elem_inner" onclick="show_popup('{{ medium.type }}', '{% if page.sub %}../{% endif %}../../assets/projects/{% if page.sub %}{{ page.sub-name }}/{% endif %}{{ page.slug }}/{{medium.image}}','{{ medium.url }}')">
						<div class="image cover medium_thumb" role="img" aria-label="{% if medium.alt-text %}{{medium.alt-text}}{% else %}{{page.name}} project image{% endif %}" style="background-image:url('{% if page.sub %}../{% endif %}../../assets/projects/{% if page.sub %}{{ page.sub-name }}/{% endif %}{{ page.slug }}/{{ medium.image }}')">
						</div>
						<div class='text'>
							<span class="sub-title"><b>img {{ medium.id }}</b></span>
						</div>
					</div>	
				</div>
			{% endfor %}
		{% endif %}	
	{% endif %}

</div></div><!--end .project_right .project_inner-->



</div>
<style>

</style>


<div class="media_popup" onclick="hide_popup()">
	<div class="inner">

	</div>
</div>






