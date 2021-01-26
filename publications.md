---
layout: page
title: Publications
type: index
permalink: /publications/
include: true
custom_js:
- isotope_min
---

<style>
.ind{
}
.present_div{
}	
	
.text-block {
	position: relative;
	float: left;
	display: block;
	margin: 0 35px 40px 35px;
	font-size: 20px;
}
</style>



<div class="present_div fontsize_3"><h1>Publications</h1></div>
<div class="grid about_grid" style="height:auto;">
<div class="text-block">
<p>As a knowledge design lab, metaLAB produces work that inhabits, extends, and connects across the received categories of cultural and scholarly communication. Lab members collaborate on books, articles, database documentaries, installations, and exhibitions as well as on such publications as decks of cards, posters, and data visualizations. Like our research, these publications take diverse forms, combining traditional scholarly genres like the monograph with the poster, the playing card, and other popular formats, and experimenting with materiality, graphic design, and digital/print hybridity.</p>
</div>
</div>
<div class="grid grid_present">
<div class="grid-sizer"></div>

 {% assign project_elem = site.projects | sort: 'year'  %}
	{% for project in project_elem reversed %}
	{% if project.type == 'publication' %}
		<div class="grid-item short {{ project.year }} {{ project.type }} {% if project.featured %}featured{% endif %}">
			<div class="elem_inner">
				<a href="{{ site.baseurl }}{{ project.url }}">
					{% if project.thumbnail_format %}
						<div class="image cover" role="img" aria-label="{% if project.alt-text %}{{project.alt-text}}{% else %}{{project.name}}{% endif %}"  style="background-image:url('{{ site.baseurl }}/assets/projects/{{ project.slug }}.{{ project.thumbnail_format }}')"></div>	
					{% else %}
						<div class="image cover" role="img" aria-label="{% if project.alt-text %}{{project.alt-text}}{% else %}{{project.name}}{% endif %}"  style="background-image:url('{{ site.baseurl }}/assets/projects/{{ project.slug }}.jpg')"></div>	
					{% endif %}
									
					<div class='text fontsize_1 fontcolor_b'>
						<div><span class="obj_meta_type">Title</span> <div class="obj_meta_tab">{{ project.name }}</div></div>
						<div><span class="obj_meta_type">Date</span> <div class="obj_meta_tab">{{ project.year }}</div></div>
						<div><span class="obj_meta_type">Type.</span> <div class="obj_meta_tab">{{ project.type }}</div></div>
			
					</div>
				</a>
			</div>		
		</div>	
	{% endif %}
	{% endfor %}


</div>
