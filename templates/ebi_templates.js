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
      html:`<div class="row"><div class="callout columns medium-10 medium-push-1 industry-background white-color">
              <p>Summary goes here</p>
           </div></div>`
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
    },
    {
      title:"Accordions",
      image:"template1.gif",
      description:"A basic set of accoridons.",
      html:`<p>&nbsp;</p>

            <div class="accordion-list">
            <div aria-multiselectable="true" class="accordion-list-group accordion-list-items" id="accordion1524573360813" role="tablist">
            <p>&nbsp;</p>

            <div class="panel panel-default collapsible-item" id="Collapsible1524573407713">
            <div class="panel-heading collapsible-item-heading" id="headingCollapsible1524573407713" role="tab">
            <h4 class="panel-title collapsible-item-title"><a aria-controls="collapseCollapsible1524573407713" aria-expanded="false" class="collapsed collapsible-item-title-link-icon pull-right" data-parent="#accordion1524573360813" data-toggle="collapse" href="#collapseCollapsible1524573407713" role="button"><span class="glyphicon glyphicon-chevron-down">&nbsp;</span></a> <a aria-controls="collapseCollapsible1524573407713" aria-expanded="false" class="collapsed collapsible-item-title-link" data-parent="#accordion1524573360813" data-toggle="collapse" href="#collapseCollapsible1524573407713" role="button"><span>Title Text</span></a></h4>
            </div>

            <div aria-labelledby="headingCollapsible1524573407713" class="panel-collapse collapse collapsible-item-collapse" id="collapseCollapsible1524573407713" role="tabpanel">
            <div class="panel-body collapsible-item-body">
            <p>Body Text</p>
            </div>
            </div>
            </div>

            <p>&nbsp;</p>

            <div class="collapsible-item panel panel-default" id="Collapsible1524573397896">
            <div class="collapsible-item-heading panel-heading" id="headingCollapsible1524573397896" role="tab">
            <h4 class="collapsible-item-title panel-title"><a aria-controls="collapseCollapsible1524573397896" aria-expanded="false" class="collapsed collapsible-item-title-link-icon" data-parent="#accordion1524573360813" data-toggle="collapse" href="#collapseCollapsible1524573397896" role="button"><span class="glyphicon glyphicon-chevron-down">&nbsp;</span></a> <a aria-controls="collapseCollapsible1524573397896" aria-expanded="false" class="collapsed collapsible-item-title-link" data-parent="#accordion1524573360813" data-toggle="collapse" href="#collapseCollapsible1524573397896" role="button">Title Text</a></h4>
            </div>

            <div aria-labelledby="headingCollapsible1524573397896" class="collapse collapsible-item-collapse panel-collapse" id="collapseCollapsible1524573397896" role="tabpanel">
            <div class="collapsible-item-body panel-body">
            <p>Body Text</p>
            </div>
            </div>
            </div>
            </div>
            </div>

            <p>&nbsp;</p>`
    },
    {
      title:"Programme",
      image:"template1.gif",
      description:"Programme table for 1 day events or meetings.",
      html:`<table class="hover">
              <thead>
              <tr>
                <th colspan="3"><h5>Monday 3 September 2018</h5></th>
              </tr>
              </thead>
              <tbody>
            <tr>
              <td>08:30</td>
              <td>Arrival, registration</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>09:00-10:30</td>
              <td>Welcome and introductions</td>
              <td>Host Name</td>
            </tr>
            <tr>
              <td>10:30-11:00</td>
              <td colspan="2">Break</td>
            </tr>
            <tr>
              <td>11:00-12:30</td>
              <td>Title of Talk</td>
              <td>Speaker Name</td>
            </tr>
            <tr>
              <td>12:30-13:30</td>
              <td colspan="2">Lunch</td>
            </tr>
            <tr>
              <td>13:30-15:00</td>
              <td>Title of Talk</td>
              <td>Speaker Name / Group Name</td>
            </tr>
            <tr>
              <td>15:00-15:30</td>
              <td>Break</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>15:30-17:00</td>
              <td>Title of Talk</td>
              <td>Speaker Name / Group Name</td>
            </tr>
            <tr>
              <td>17:00</td>
              <td>End of day</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>19:30</td>
              <td>Dinner</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>`
    },
    {
      title:"Long programme",
      image:"template1.gif",
      description:"Programme table for 2 or more days.",
      html:`<table class="hover">
              <thead>
              <tr>
                <th colspan="3" class="secondary-background white-color"><h5>Day 1 – Monday 3 September 2018</h5></th>
              </tr>
              </thead>
              <tbody>
            <tr>
              <td>08:30</td>
              <td>Arrival, registration</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>09:00-10:30</td>
              <td>Welcome and introductions</td>
              <td>Host Name</td>
            </tr>
            <tr>
              <td>10:30-11:00</td>
              <td colspan="2">Break</td>
            </tr>
            <tr>
              <td>11:00-12:30</td>
              <td>Title of Talk</td>
              <td>Speaker Name</td>
            </tr>
            <tr>
              <td>12:30-13:30</td>
              <td colspan="2">Lunch</td>
            </tr>
            <tr>
              <td>13:30-15:00</td>
              <td>Title of Talk</td>
              <td>Speaker Name / Group Name</td>
            </tr>
            <tr>
              <td>15:00-15:30</td>
              <td>Break</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>15:30-17:00</td>
              <td>Title of Talk</td>
              <td>Speaker Name / Group Name</td>
            </tr>
            <tr>
              <td>17:00</td>
              <td>End of day</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>19:30</td>
              <td>Dinner</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <table class="hover">
          <thead>
            <tr>
              <th colspan="3" class="secondary-background white-color"><h5>Day 2 – Monday 4 September 2018</h5></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>08:45</td>
              <td>Arrival</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>09:00-10:30</td>
              <td>Title of Talk</td>
              <td>Speaker Name</td>
            </tr>
            <tr>
              <td>10:30-11:00</td>
              <td colspan="2">Break</td>
            </tr>
            <tr>
              <td>11:00-12:30</td>
              <td>Title of Talk</td>
              <td>Speaker Name</td>
            </tr>
            <tr>
              <td>12:30-13:30</td>
              <td colspan="2">Lunch</td>
            </tr>
            <tr>
              <td>13:30-15:00</td>
              <td>Title of Talk</td>
              <td>Speaker Name / Group Name</td>
            </tr>
            <tr>
              <td>15:00-15:30</td>
              <td>Break</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>15:30-17:00</td>
              <td>Title of Talk</td>
              <td>Speaker Name / Group Name</td>
            </tr>
            <tr>
              <td>17:00</td>
              <td>End of day</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>`
    }
  ]
});
