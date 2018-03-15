CKEDITOR.addTemplates("ebi_templates",
{
  imagesPath:"https://ebiwd.github.io/EBI-CKEditor-config/templates/images/",
  templates:[
    {
      title:"EBI Image and caption",
      image:"template1.gif",
      description:"EBI One image right aligned with a caption.",
      html:`
          <div class="columns float-right medium-5">
            <figure class="image">
              <img alt="Why are PDX models important in cancer research? How can standards make them even more useful? Why should users get involved? Terry Meehan of EMBL-EBI explains." src="https://www.ebi.ac.uk/sites/ebi.ac.uk/files/groups/external_relations/images/wide-imagery/Bitcoin_challenge_credit_WUYTS_Sander_v_EMBL-EBI_780x400.jpg" width="" class="">
              <figcaption class="">A responsive <code>figure &gt; figcaption</code> wrapped in a <code>div.columns.float-right.medium-5</code></figcaption>
            </figure>
          </div>`
    },
    {
      title:"Strange Template",
      image:"template2.gif",
      description:"A template that defines two columns, each one with a title, and some text.",
      html:'\x3ctable cellspacing\x3d"0" cellpadding\x3d"0" style\x3d"width:100%" border\x3d"0"\x3e\x3ctr\x3e\x3ctd style\x3d"width:50%"\x3e\x3ch3\x3eTitle 1\x3c/h3\x3e\x3c/td\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd style\x3d"width:50%"\x3e\x3ch3\x3eTitle 2\x3c/h3\x3e\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3eText 1\x3c/td\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd\x3eText 2\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3cp\x3eMore text goes here.\x3c/p\x3e'
    },
    {
      title:"Text and Table",
      image:"template3.gif",
      description:"A title with some text and a table.",
      html:'\x3cdiv style\x3d"width: 80%"\x3e\x3ch3\x3eTitle goes here\x3c/h3\x3e\x3ctable style\x3d"width:150px;float: right" cellspacing\x3d"0" cellpadding\x3d"0" border\x3d"1"\x3e\x3ccaption style\x3d"border:solid 1px black"\x3e\x3cstrong\x3eTable title\x3c/strong\x3e\x3c/caption\x3e\x3ctr\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3c/tr\x3e\x3ctr\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3ctd\x3e\x26nbsp;\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3cp\x3eType the text here\x3c/p\x3e\x3c/div\x3e'
    }
  ]
});
