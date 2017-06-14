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
		content.src = '../../assets/updates/{{ page.slug }}/'+image;
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
	<a class="fontcolor_b" href="/updates">< updates</a>
</div>


<div class='project'>
<div class='project_left'><div class='project_inner'>

	<div class='left-bar'>
	
	<div class='project_metadetails fontsize_1'>
			<span class="obj_meta_type">Title:</span>
			<span class="obj_meta_tab2">{{ page.title }}</span>

			</br>
			<span class="obj_meta_type">Date:</span>
			<span class="obj_meta_tab2">{{ page.date | date: "%b %-d, %Y" }}</span>
			
			</br>
			<span class="obj_meta_type">Author:</span>
			<span class="obj_meta_tab2"><a href="../../people/{{ page.author | downcase }}">{{ page.author }}</a></span>
					
	</div><!--end project_metadetails-->	
	<!--</div>
	
	<div class='right-bar'>-->



		
		<div  class="content" style="margin: 50px 0">{{ content | markdownify }}</div>
	

	<div class='project_metadetails fontsize_1'>
			
		{% if page.contact-person %}
			</br>
			<span class="obj_meta_type">Contact:</span></br>
			<div class="obj_meta">
				<a href='../../people/{{ page.contact-person }}'>{{page.contact-person}}</a> \\ <a href='mailto:{{ page.contact-email }}'>email</a>
			</div>
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
						<div class="image cover medium_thumb" style="background-image:url('../../assets/updates/{{ page.slug }}/{{ medium.image }}')">
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



<div class="media_popup" onclick="hide_popup()">
	<div class="inner">

	</div>
</div>


<!--
<article class="post" itemscope itemtype="http://schema.org/BlogPosting">

  <header class="post-header">
    <h1 class="post-title" itemprop="name headline">{{ page.title | escape }}</h1>
    <p class="post-meta"><time datetime="{{ page.date | date_to_xmlschema }}" itemprop="datePublished">{{ page.date | date: "%b %-d, %Y" }}</time>{% if page.author %} • <span itemprop="author" itemscope itemtype="http://schema.org/Person"><span itemprop="name">{{ page.author }}</span></span>{% endif %}</p>
  </header>

  <div class="post-content" itemprop="articleBody">
    {{ content }}
  </div>

  {% if site.disqus.shortname %}
    {% include disqus_comments.html %}
  {% endif %}
</article>
-->