---
layout: page
title: Community
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
	
</style>


{% assign project_elem = site.people | sort: 'order' %}


<div id="community" class="present_div fontsize_3"><h1>Community</h1></div>

<div class="grid about_grid">
<div class="text-block">
	<p>
 metaLAB is a porous community of experimentally-minded <a href="../about">scholars, artists, designers, technologists, and thinkers</a>, with affiliations and practices distributed worldwide. Together we instigate and manage a portfolio of projects: some we spin up ourselves intramurally or extramurally; others involve partnerships with public institutions such as libraries, archives, and museums; others still involve commissions or competitions. Projects vary in scope and scale from provocations to platforms and weeks to years. Amidst the ebb and flow of projects, we come together for conversation and shared critique, inspiration, and collaboration. That conversation is ongoing and open, and represents the heart of metaLAB as a community.</p>
 <p>
There are various forms of involvement with metaLAB. <strong>Principals</strong> are staff, faculty, and affiliates with longstanding, formal commitments to a number of metaLAB projects. Akin to the principals in a design studio or architectural practice, they advise on strategic matters. <strong>Graduate and undergraduate student researchers</strong> are typically Harvard-affiliated and enrolled in degree programs within the university; they often serve as team members on metaLAB projects as they pursue their degrees. <strong>Visiting researchers</strong> are individuals who either come to metaLAB as postdocs (bringing their own external funding) or have a visiting appointment at one of Harvard’s schools; they join metaLAB for purposes of participation in projects and advancing their own research in creative dialogue with the metaLAB community. <strong>Affiliates</strong> join metaLAB&#39;s yearly cycle of conversation and discovery on a less formal basis, participating in weekly meetings, joining projects, and individually or collaboratively advancing their own research and design work.</p>
<p>
If you want to know more, send us a note at <a href='mailto:info@metalab.harvard.edu'>info@metalab.harvard.edu</a>. No introduction is required. We welcome all inquiries and expressions of interest. Perhaps you’d like to join one of our weekly meetings remotely or in person? Or you’re interested in a specific project? Or in a partnership with your own design team or research group? Reach out to learn more. And if you&#39;re looking for a formal affiliation with Harvard, there are fellowships available across campus, including the program at the <a href='https://cyber.harvard.edu/getinvolved/fellowships'>Berkman Klein Center</a>, our host organization, as well as at the Nieman Foundation, the Radcliffe Institute for Advanced Study, and Harvard&#39;s Graduate School of Design, all of which have annual application cycles.</p>
</div>

</div>


<div class="grid about_grid">
	
	<div class="present_div fontsize_3"><h2>Alumni</h2></div>

	{% for person in project_elem %}
		{% if person.row == 4 %}
			<div class="grid-item short row2">
				<div class="elem_inner">
						<div class='text fontsize_1 fontcolor_b'>
							<div><span class="obj_meta_type"></span> <div class="obj_meta_tab">{{ person.name }} {{ person.lastname }}</div></div>
						</div>
				</div>		
			</div>	
		{% endif %}
	{% endfor %}

</div>

<div class="present_div fontsize_3"><h2>Partners</h2></div>
<div class="grid about_grid">

	<div class="grid-item partners short featured">
		<div class="elem_inner"><div class="inner">
			With partners at the Berkman Klein Center, across the university, and in the world at large, metaLAB explores the digital arts and humanities through research, experimentation, tool building, teaching, through publications in print and online, and via exhibition, performance, and social practice. Our projects infuse traditional modes of academic inquiry with an enterprising spirit of hacking, making, and creative research.
			<div class="partner_list">
				<a href="https://camd.northeastern.edu/center-for-design/" target="_blank">The Center for Design at Northeastern University</a>
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



