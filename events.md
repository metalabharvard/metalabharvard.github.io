---
layout: page
title: Events
type: index
permalink: /events/
include: true
custom_js:
- isotope_min
---

<style>
.ind{
	display: none;
}
.present_div{
}
</style>



<div class="present_div fontsize_3">Events</div>
<div class="grid grid_present">
<div class="grid-sizer"></div>

 {% assign project_elem = site.projects | sort: 'year'  | sort: 'stat' %}
	{% for project in project_elem reversed %}
	{% if project.type == 'event' %}
		<div class="grid-item short {{ project.year }} {{ project.type }} {% if project.featured %}featured{% endif %}">
			<div class="elem_inner">
				<a href="{{ site.baseurl }}{{ project.url }}">
					{% if project.thumbnail_format %}
						<div class="image cover" style="background-image:url('{{ site.baseurl }}/assets/projects/{{ project.slug }}.{{ project.thumbnail_format }}')"></div>	
					{% else %}
						<div class="image cover" style="background-image:url('{{ site.baseurl }}/assets/projects/{{ project.slug }}.jpg')"></div>	
					{% endif %}
									
					<div class='text fontsize_1 fontcolor_b'>
						<div><span class="obj_meta_type">Title</span> <div class="obj_meta_tab">{{ project.name }}</div></div>
						<div><span class="obj_meta_type">Date</span> <div class="obj_meta_tab">{% if project.fulldate %}{{project.fulldate}}{% else %}{{ project.year }}{% endif %}</div></div>
						<div><span class="obj_meta_type">Type</span> <div class="obj_meta_tab">{{ project.type }}</div></div>
						{% if project.type == 'event' %}
						<div><span class="obj_meta_type">Loc</span> <div class="obj_meta_tab">{{ project.location }}</div></div>			
						{% else %}
						<div><span class="obj_meta_type">Stat</span> <div class="obj_meta_tab">{{ project.stat }}</div></div>
						{% endif %}
						
					</div>
				</a>
			</div>		
		</div>	
	{% endif %}
	{% endfor %}


</div>

