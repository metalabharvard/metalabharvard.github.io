---
layout: page
title: Updates
type: index
permalink: /updates/
include: false
custom_js:
- isotope_min
---

<style>
.ind{
}
.present_div{
}
</style>



<div class="present_div fontsize_3">Updates</div>
<div class="grid grid_present">
<div class="grid-sizer"></div>

 {% assign posts = site.posts %}
	{% for post in posts %}
		<div class="grid-item short update">
			<div class="elem_inner">
									
					<div class='text fontsize_2 fontcolor_b'>
						<div><div class="obj_meta_tab title">				
							<a href="{{ site.baseurl }}{{ post.url }}">
							{{ post.title }}</a>
							</div></div>
						<div><div class="obj_meta_tab date"></div></div>
						<div><div class="obj_meta_tab content">{{ post.content }}</div></div>
	
					</div>
			</div>		
		</div>	
	{% endfor %}


</div>

