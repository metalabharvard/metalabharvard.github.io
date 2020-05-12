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

	.text-block {
		position: relative;
	    float: left;
	    display: block;
	    margin: 0 35px 40px 35px;
	    font-size: 20px;
	}

	.intro-text {
		overflow: hidden;
    	position: relative;
    	font-weight: bold;
    	font-style: italic;
    	margin-top: -70px;

	}

	.mono {
	    font-family:"Roboto Mono", monospace;
		font-size: 16px !important;
		font-style: normal;	
	}

	p.sub-term {
		margin-left: 20px;
	}

	.block {
		border-left: 2px solid black;
		margin-left: 40px;

	}


	
</style>

<div class="about_grid intro-text">
	<div class="text-block mono">
		<a href="../community">Interested in joining our community? Learn more!</a>
	</div>
</div>

<div id="about" class="present_div fontsize_3">About</div>


<div class="grid about_grid">
<div class="text-block">
	<p>
 Like all platforms for experimentation, metaLAB is less a destination than a perpetual work in progress. Rooted in the arts and humanities, straddling scholarly, critical, and creative practice, it is a community of scholars, designers, artists, makers, technologists, curators, and educators dedicated to modeling new forms of cultural communication, creative and critical practice, and knowledge production.</p>
 
 <div class="block">
<p class="sub-term" id="idea-foundry">metaLAB is an <i>idea foundry</i> in the sense that it is committed to ideation, debate, speculation, and theorization across the disciplinary grid.</p>
 
<p class="sub-term" id="knowledge-design-lab">metaLAB is a <i>knowledge design lab</i> inasmuch as it consists of a portfolio of projects that translate ideas into practical expressions, from experimental books and pamphlets to museum installations to software platforms and data visualizations to participatory events.</p>
 
<p class="sub-term" id="production-studio">metaLAB is a <i>production studio</i> because it is committed to bringing together the mind and the hand, thinking and making. It tests out hypotheses and ideas by developing and delivering a wide array of outputs including database documentaries, software platforms, artworks, exhibitions, studio courses and workshops, data visualizations, and curatorial projects.</p>
</div>
 
<p>As an institutional unit within the <a href="https://cyber.harvard.edu/">Berkman Klein Center for Internet & Society</a>, metaLAB is actively involved in the Center’s research efforts in such domains as artificial intelligence, social justice, internet governance, cybersecurity, and the law. metaLAB is physically located on the 4th floor of 42 Kirkland Street, within Harvard’s <a href="https://www.gsd.harvard.edu/">Graduate School of Design</a>. Because design practice is fundamental to its ethos, metaLAB maintains close ties to GSD faculty, students, and academic programs, as well as to the <a href="https://www.fas.harvard.edu/">Faculty of Arts and Sciences</a>.</p>
</div>
</div>



<div class="present_div fontsize_3">Humans</div>

<div class="grid about_grid">
 {% assign project_elem = site.people | sort: 'order' %}

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

 {% assign project_elem = site.people | sort: 'lastname' %}

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
		{% if person.row == 2.5 %}
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





