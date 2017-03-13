---
layout: page
title: Projects
permalink: /projects/
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



<div class="present_div fontsize_3">Recent Projects</div>
<div class="grid grid_present">
<div class="grid-sizer"></div>


 {% assign project_elem = site.projects | sort: 'year'  | sort: 'stat' %}
	{% for project in project_elem reversed %}
	{% if project.year == 2016 %}
	{% if project.type == 'project' %}
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
						<div><span class="obj_meta_type">Date</span> <div class="obj_meta_tab">{{ project.year }}</div></div>
						<div><span class="obj_meta_type">Type.</span> <div class="obj_meta_tab">{{ project.type }}</div></div>
						<div><span class="obj_meta_type">Stat</span> <div class="obj_meta_tab">{{ project.stat }}</div></div>
					</div>
				</a>
			</div>		
		</div>	
	{% endif %}	
	{% endif %}	
	{% endfor %}


</div>





<div class="past_div fontsize_3">Past Projects</div>
<div class="grid grid_past">
<div class="grid-sizer"></div>


 {% assign project_elem = site.projects | sort: 'year'  | sort: 'stat' %}



	{% for project in project_elem reversed %}
	{% if project.year != 2016 %}
	{% if project.type == 'project' %}
		<div class="grid-item short {{ project.year }} {{ project.type }} {% if project.featured %}featured{% endif %}">
			<div class="elem_inner">
				<a href="{{ site.baseurl }}{{ project.url }}">
					{% if project.thumbnail_format %}
						<div class="image cover" style="background-image:url('{{ site.baseurl }}/assets/projects/{{ project.slug }}.{{ project.thumbnail_format }}')"></div>	
					{% else %}
						<div class="image cover" style="background-image:url('{{ site.baseurl }}/assets/projects/{{ project.slug }}.jpg')"></div>	
					{% endif %}
									
					<div class='text fontsize_1 fontcolor_b'>
						<div><span class="obj_meta_type">Title</span> <span class="obj_meta_tab">{{ project.name }}</span></div>
						<div><span class="obj_meta_type">Date</span> <span class="obj_meta_tab">{{ project.year }}</span></div>
						<div><span class="obj_meta_type">Cont.</span> <span class="obj_meta_tab">{{ project.context }}</span></div>
						<div><span class="obj_meta_type">Stat</span> <span class="obj_meta_tab">{{ project.stat }}</span></div>
					</div>
				</a>
			</div>		
		</div>	
	{% endif %}	
	{% endif %}	
	{% endfor %}


</div>


