# JEKYLL!!
[jekyllrb.com](https://jekyllrb.com/)

### basic up and running
1. install ruby and rubygems if you haven't already
2. install jekyll:  
```
gem install jekyll bundler
```
3. within the directory run:  
```
bundle exec jekyll serve
```
4. open [http://127.0.0.1:4000/jekyll/](http://127.0.0.1:4000/jekyll/projects/) in the browser

### generating static html content
jekyll will generate nice static html files for your site which you can then host online.

1. quit the server if it's running
2. run `bundle exec jekyll build`
3. files will created in the `_site` folder of your directory. if there were existing files there from a previous build, running this command will overwrite as necessary. 

if you run the site from the _site folder directly, you may run into broken links with css / js, because the url is slightly different than it is on mlhplayground. i would probably not worry about generating static files; if it looks good via jekyll we can make it work.

### where's all the data
we're using five categories of stuff, each with its own metadata.

1. people
2. projects
3. publications
4. teaching
5. posts

each category has a folder in the root directory containing data entries as individual markdown files (e.g. `_people`). each file is a combination of [YAML](http://docs.ansible.com/ansible/YAMLSyntax.html) metadata frontmatter at the top of the doc, as well as a big block of free text which may include html or markdown. i'm calling these entities "data" or "data elements" in this doc.

each category also has two layout templates:

1. layout for the page that lists all items in that category  
[http://127.0.0.1:4000/jekyll/projects/](http://127.0.0.1:4000/jekyll/projects/)  
This layout is located in the root directory (e.g. `projects.md`, `posts.md`).   
People are the exception, as I buried them under the about page, so their layout is `jekyll-mlh/about/people.md`.
2. layout for the page for each individual item  
[http://127.0.0.1:4000/jekyll/projects/curricle](http://127.0.0.1:4000/jekyll/projects/curricle)  
These are all located at `jekyll-mlh/_layouts/`. 

filenames should indicate which layouts go with which datatype, but if you're not sure, the data file for each entry will indicate which it uses in the metadata frontmatter of the file under the **layout** field. 
 

### editing styling & layout

you'll definitely want to edit the css file:  
`jekyll-mlh/css`

you'll also edit the data's layout files in the `_layout` folder (as well as `about/people.md`). the templating language is [liquid ](http://shopify.github.io/liquid/) if you need more info on functionality / syntax. it's basically referencing the fields in the data files' frontmatter (see more info [here](https://jekyllrb.com/docs/frontmatter/)).

you may want to add html / classes to the markdown files for individual data elements (although this might not be necessary).

there are a few static files floating around which aren't pulling from any data file but are self-contained:  
`about/faq.md`

header and footer layouts are in `_includes`

the landing page is `jekyll-mlh/index.html`. 

if you need to reference local javascript / images / pages, the best way i've found is to do   
`{{ site.baseurl }}/file/path/here/etc.jpg`   
**site.baseurl** just gets translated to the root directory.

i've been putting both custom javascript and libraries in `jekyll-mlh/js`  

you'll want to make sure any javascript is called from `_layout/default.html`. if it's something every page should load (e.g. a library), you can simple link to it (e.g. `<script src="{{ site.baseurl }}/js/filename.js"></script>`. if it's something only certain pages should load, add it to their frontmatter under `custom_js` as the filename (without `.js`) -- you can see `projects.md` or `index.html` as an example.



