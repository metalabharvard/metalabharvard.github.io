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
		content.src = '../../assets/projects/{{ page.slug }}/'+image;
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
	<a class="fontcolor_b" href="/{{ page.type }}s">< {{ page.type }}s</a> 
</div>


<div class='project'>
<div class='project_left'><div class='project_inner'>

	<div class='left-bar'>
	
	<div class='project_metadetails fontsize_1'>
		<span class="obj_meta_type">Title:</span>
		<span class="obj_meta_tab2">{{ page.name }}</span>

		{% if page.year %}
			</br>
			<span class="obj_meta_type">Date:</span>
			<span class="obj_meta_tab2">{{ page.year }}</span>
		{% endif %}
		
		{% if page.context %}
			</br>
			<span class="obj_meta_type">Context:</span>
			<span class="obj_meta_tab2">
				{{ page.context }}
			</span>
		{% endif %}

		{% if page.year == 2016 %}
			</br>
			<span class="obj_meta_type">Status:</span>
			<span class="obj_meta_tab2">Active</span>
		{% endif %}	
			
	</div><!--end project_metadetails-->	
	<!--</div>
	
	<div class='right-bar'>-->
	
		{%if page.tweet-summary %}
			<div style="margin: 50px 0;" class="fontsize_3">{{ page.tweet-summary }}</div>
		{% endif %}
	
		{% if page.research-questions %}
			<div class="obj_meta fontsize_2">
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
				{{ page.contact-person }} \\ <a href='mailto:{{ page.contact-email }}'>email</a>
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
	{% if page.media %}
		{% for medium in page.media %}
			<div class="grid-item short {{ medium.stat }}">
				<div class="elem_inner" onclick="show_popup('{{ medium.type }}','{{ medium.image }}','{{ medium.url }}')">
					<div class="image cover medium_thumb" style="background-image:url('../../assets/projects/{{ page.slug }}/{{ medium.image }}')">
					</div>
					<div class='text'>
						<span class="sub-title"><b>img {{ medium.id }}</b></span>
					</div>
				</div>	
			</div>
		{% endfor %}
	{% endif %}	

</div></div><!--end .project_right .project_inner-->



</div>
<style>

</style>


<div class="media_popup" onclick="hide_popup()">
	<div class="inner">

	</div>
</div>






