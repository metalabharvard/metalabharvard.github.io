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

.alt-grid {
    overflow: hidden;
    position: relative;
    margin-bottom: 60px;
}
</style>



<div class="present_div fontsize_3"><h1>Publications</h1></div>
<div class="alt-grid about_grid">
<div class="text-block">
<p>As a knowledge design lab, metaLAB produces work that inhabits, extends, and connects across the received categories of cultural and scholarly communication. Lab members collaborate on books, articles, database documentaries, installations, and exhibitions as well as on such publications as decks of cards, posters, and data visualizations. Like our research, these publications take diverse forms, combining traditional scholarly genres like the monograph with the poster, the playing card, and other popular formats, and experimenting with materiality, graphic design, and digital/print hybridity.
</p>
<p>The <a href="https://mitpress.mit.edu/books/series/metalabprojects">metaLABproject series</a> publishes book length monographs and essay collections that sit between media history and speculative design. The word “project” functions as both noun and verb—pointing to both the documentation of existing high-impact research works and the aim to project outward and beyond. Whether a “remix” or an agenda-setting “projection,” each volume in the series forms an extended essay that deepens and documents a given domain of practice and experimentation. Previous volumes have included explorations of <a href="https://www.hup.harvard.edu/catalog.php?isbn=9780674725348">urban cartography</a>, <a href="https://www.hup.harvard.edu/catalog.php?isbn=9780674724938">graphic epistemology</a>, and the <a href="https://www.hup.harvard.edu/catalog.php?isbn=9780674724983">military-entertainment complex</a>. The latest offering, Michael John Gorman’s <a href="https://mitpress.mit.edu/books/idea-colliders"><em>Idea Colliders</em></a>, examines the deep histories and possible futures of the science museum. The metaLAB project series is distributed by MIT Press. 
 </p>
<p>In January 2021, metaLAB launched a collaboration with <a href="https://www.printedmatter.org/catalog/publisher/16170">Printed Matter</a>, one of the most significant experimental bookstores in the US. Printed Matter will carry a select group of the more adventurously designed knowledge-objects produced by metaLAB—including a <a href="https://www.printedmatter.org/catalog/57244">remixable deck of cards</a> that reconsiders the role of the library, a <a href="https://www.printedmatter.org/catalog/57243">combinatory catalog-poster</a> that explores the relationship between artificial intelligence and human curators, and the <a href="https://www.printedmatter.org/catalog/57245/">metaLAB Portfolio</a>, an overview compendium of selected projects, teaching, and research.
</p>
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
