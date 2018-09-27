---
layout: page
title: About
include: true
type: index
order: 1
---
<style>
	.about_grid .short{
	}
	.about_grid .short.row2{
		height: 100px;
	}	
	
	.about_sum .elem_inner{
		border: 2px solid red;
		height: 400px!important;
	}
	.about_sum .elem_inner .inner{
		padding: 25px;
	}
	.header_desc span{
		color:red;
	}
	.about_r{
		margin-bottom: 15px;
		font-family: 'Roboto Mono', monospace;
		height: 150px;
	}
	.about_r span{
		color: red;
	}
	.partner_list{
		margin-top: 25px;
	}
	.partner_list a{
		display: block;
	}
	
	.grid-item.partners.short.featured {
    height: 100%;
	}
	
</style>


<div class="present_div fontsize_3">Humans</div>

<div class="grid about_grid">
 {% assign project_elem = site.people | sort: 'lastname' %}

	{% for person in project_elem %}
		{% if person.row == 1 %}
			<div class="grid-item short">
				<div class="elem_inner">
						<a href="../people/{{ person.slug }}"><div class="image cover" style="background-image:url('{{ site.baseurl }}/assets/people/{{ person.slug }}.jpg')"></div>	</a>	
						<div class='text fontsize_1 fontcolor_b'>
							<div><span class="obj_meta_type">Name</span> <div class="obj_meta_tab"><a href="../people/{{ person.slug }}">{{ person.name }} {{ person.lastname }}</a></div></div>
							<div><span class="obj_meta_type">Title</span> <div class="obj_meta_tab">{{ person.title }}</div></div>
							{% if person.twitter %}
								<div><span class="obj_meta_type">Twtr.</span> <div class="obj_meta_tab"><a href="https://twitter.com/{{ person.twitter }}" target="_blank">{{ person.twitter }}</a></div></div>
							{% endif %}
							{% if person.instagram %}
							<div><span class="obj_meta_type">Insta.</span> <div class="obj_meta_tab"><a href="https://instagram.com/{{ person.instagram }}" target="_blank">{{ person.instagram }}</a></div></div>
							{% endif %}
							{% if person.website %}
							<div><span class="obj_meta_type">Port.</span> <div class="obj_meta_tab"><a href="http://{{ person.website }}" target="_blank">{{ person.website }}</a></div></div>
							{% endif %}							
						</div>
				</div>		
			</div>	
		{% endif %}		
	{% endfor %}


	{% for person in project_elem %}
		{% if person.row == 2 %}
			<div class="grid-item short">
				<div class="elem_inner">
						<a href="../people/{{ person.slug }}"><div class="image cover" style="background-image:url('{{ site.baseurl }}/assets/people/{{ person.slug }}.jpg')"></div>	</a>	
						<div class='text fontsize_1 fontcolor_b'>
							<div><span class="obj_meta_type">Name</span> <div class="obj_meta_tab">
							{% if person.email %}
							<a href="mailto:{{ person.email }}">{{ person.name }} {{ person.lastname }}</a>
							{% else %} {{ person.name }} {{ person.lastname }}
							{% endif %}
							</div></div>
							<div><span class="obj_meta_type">Title</span> <div class="obj_meta_tab">{{ person.title }}</div></div>
							{% if person.twitter %}
								<div><span class="obj_meta_type">Twtr.</span> <div class="obj_meta_tab"><a href="https://twitter.com/{{ person.twitter }}" target="_blank">{{ person.twitter }}</a></div></div>
							{% endif %}
							{% if person.instagram %}
							<div><span class="obj_meta_type">Insta.</span> <div class="obj_meta_tab"><a href="https://instagram.com/{{ person.instagram }}" target="_blank">{{ person.instagram }}</a></div></div>
							{% endif %}
							{% if person.website %}
							<div><span class="obj_meta_type">Port.</span> <div class="obj_meta_tab"><a href="http://{{ person.website }}" target="_blank">{{ person.website }}</a></div></div>
							{% endif %}
							
						</div>
				</div>		
			</div>	
		{% endif %}		
	{% endfor %}

{% for person in project_elem %}
		{% if person.row == 3 %}
			<div class="grid-item short row2">
				<div class="elem_inner">	
						<div class='text fontsize_1 fontcolor_b'>
							<div><span class="obj_meta_type">Name</span> <div class="obj_meta_tab">
								{% if person.email %}
								<a href="mailto:{{ person.email }}">{{ person.name }} {{ person.lastname }}</a>
								{% else %}{{ person.name }} {{ person.lastname }}{% endif %}
								</div></div>
							<div><span class="obj_meta_type">Title</span> <div class="obj_meta_tab">{{ person.title }}</div></div>
							{% if person.twitter %}
								<div><span class="obj_meta_type">Twtr.</span> <div class="obj_meta_tab"><a href="https://twitter.com/{{ person.twitter }}" target="_blank">{{ person.twitter }}</a></div></div>
							{% endif %}
							{% if person.instagram %}
							<div><span class="obj_meta_type">Insta.</span> <div class="obj_meta_tab"><a href="https://instagram.com/{{ person.instagram }}" target="_blank">{{ person.instagram }}</a></div></div>
							{% endif %}
							{% if person.website %}
							<div><span class="obj_meta_type">Port.</span> <div class="obj_meta_tab"><a href="http://{{ person.website }}" target="_blank">{{ person.website }}</a></div></div>
							{% endif %}
							
						</div>
				</div>		
			</div>	
		{% endif %}		
	{% endfor %}

	</div>

<div class="grid about_grid">
	
	<div class="present_div no_underline fontsize_3">Alumni</div>

	{% for person in project_elem %}
		{% if person.row == 4 %}
			<div class="grid-item short row2">
				<div class="elem_inner">
						<div class='text fontsize_1 fontcolor_b'>
							<div><span class="obj_meta_type">Name</span> <div class="obj_meta_tab">{{ person.name }} {{ person.lastname }}</div></div>
							{% if person.twitter %}
								<div><span class="obj_meta_type">Twtr.</span> <div class="obj_meta_tab"><a href="https://twitter.com/{{ person.twitter }}" target="_blank">{{ person.twitter }}</a></div></div>
							{% endif %}
							{% if person.instagram %}
								<div><span class="obj_meta_type">Insta.</span> <div class="obj_meta_tab"><a href="https://instagram.com/{{ person.instagram }}" target="_blank">{{ person.instagram }}</a></div></div>
							{% endif %}
							{% if person.port %}							
								<div><span class="obj_meta_type">Port.</span> <div class="obj_meta_tab"><a href="http://{{ person.website }}" target="_blank">{{ person.website }}</a></div></div>
							{% endif %}
						</div>
				</div>		
			</div>	
		{% endif %}
	{% endfor %}

</div>

<div class="present_div fontsize_3">Partners</div>
<div class="grid about_grid">

	<div class="grid-item partners short featured">
		<div class="elem_inner"><div class="inner">
			With partners at the Berkman Klein Center, across the university, and in the world at large, metaLAB explores the digital arts and humanities through research, experimentation, tool building, teaching, through publications in print and online, and via exhibition, performance, and social practice. Our projects infuse traditional modes of academic inquiry with an enterprising spirit of hacking, making, and creative research.
			<div class="partner_list">
				<a href="" target="_blank">Arts @ 29 Garden</a>
				<a href="" target="_blank">Critical Media Practice</a>
				<a href="" target="_blank"><a href="" target="_blank">Faculty of Arts and Sciences</a>
				<a href="" target="_blank">Film Study Center</a>
				<a href="" target="_blank">GridRepublic</a>
				<a href="" target="_blank">Harvard Art Museums</a>
				<a href="" target="_blank">Harvard Graduate School of Design</a>
				<a href="" target="_blank">Harvard Library Lab at the Office for Scholarly Communication</a>
				<a href="" target="_blank">Harvard University Press</a>
				<a href="" target="_blank">Museum of Fine Arts</a>
				<a href="" target="_blank">NovelTM</a>
				<a href="" target="_blank">Project Projects</a>
				<a href="" target="_blank">PRX</a>
				<a href="" target="_blank">Small Design Firm Inc.</a>
				<a href="" target="_blank">The Arnold Arboretum of Harvard University</a>
				<a href="" target="_blank">The Berkman Klein Center for Internet and Society</a></a>
				<a href="" target="_blank">The Center for Geographic Analysis</a>
				<a href="" target="_blank">The Getty Foundation</a>
				<a href="" target="_blank">The Laboratory at Harvard</a>
				<a href="" target="_blank">The Observatory of literary life</a>
				<a href="" target="_blank">The Sensory Ethnography Lab</a>
				<a href="" target="_blank">Villa i Tatti - The Harvard University Center for Renaissance Studies</a>
				<a href="" target="_blank">xycomm</a>
			</div>
		</div></div>		
	</div>

</div>