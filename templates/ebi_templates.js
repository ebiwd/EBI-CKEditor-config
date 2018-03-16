CKEDITOR.addTemplates("ebi_templates",
{
  imagesPath:"https://ebiwd.github.io/EBI-CKEditor-config/templates/images/",
  templates:[
    {
      title:"EBI Image and caption",
      image:"template1.gif",
      description:"EBI One responsive image right aligned with a caption.",
      html:`<div class="columns float-right medium-5">
             <figure class="image">
               <img alt="Alt text." src="https://www.ebi.ac.uk/sites/ebi.ac.uk/files/groups/external_relations/images/wide-imagery/Bitcoin_challenge_credit_WUYTS_Sander_v_EMBL-EBI_780x400.jpg">
               <figcaption class="">Caption here.</figcaption>
             </figure>
           </div>`
    },
    {
      title:"Blue summary box",
      image:"template1.gif",
      description:"A centered blue box for summaries.",
      html:`<div class="callout columns medium-10 medium-push-1 industry-background white-color">
              <p>Summary goes here</p>
           </div>`
    },
    {
      title:"Grey info box",
      image:"template1.gif",
      description:"A grey infox box.",
      html:`<div class="callout">
              <p>Info goes here</p>
           </div>`
    },
    {
      title:"Grey sidebar box",
      image:"template1.gif",
      description:"A grey infox box.",
      html:`<div class="callout float-right medium-3 margin-left-large">
              <p>Info goes here</p>
           </div>`
    },
    {
      title:"Pullquote",
      image:"template1.gif",
      description:"A grey infox box.",
      html:`<blockquote class="lead quote callout industry-background white-color padding-left-xlarge">
              I'm being quoted here and want to be noticed. 
              <cite class="text-right">Hi, I'm a <a href="#">citation</a>!</cite>
            </blockquote>`
    }
  ]
});
