function getcollapsibleItemFoundation() {
    var collapsibleItemFoundation =
        '<div class="panel panel-default collapsible-item accordion-item xdisabled-is-active" data-accordion-item id="collapbsible-1">' +
        '  <a class="accordion-title" data-toggle="collapse" data-parent="#accordion" href="#collapseCollapbsible" aria-expanded="false" aria-controls="collapseCollapbsible"><span class="collapsible-item-title-link-text">Title Text</span></a>' +
        '  <div id="collapseCollapbsible" class="panel-collapse collapse collapsible-item-collapse accordion-content" data-tab-content>' +
        '    <div class="panel-body collapsible-item-body">Body Text</div>' +
        '  </div>' +
        '</div>';
    return collapsibleItemFoundation;
}

CKEDITOR.dtd.$editable.a = 1;

CKEDITOR.plugins.add('collapsibleItemFoundation', {
    requires: 'widget',
    icons: 'collapsibleItemFoundation',
    hidpi: true,
    init: function (editor) {
        editor.widgets.add('collapsibleItemFoundation', {
            button: 'Insert Collapsible Item',
            template: getcollapsibleItemFoundation(),
            editables: {
                title: {
                    selector: '.accordion-title',
                    allowedContent: 'span strong em u;*{color}'
                },
                content: {
                    selector: '.collapsible-item-body',
                    allowedContent: 'p;br;span(*)[*];ul;ol;li;strong;em;u;table(*)[*];tbody;thead;tr;td;th;hr;a;a[*];a(*)[*];img(*)[*];'
                }
            },
            allowedContent: 'div(*)[*];a(!accordion*,collapsed,panel*)[*];',
            requiredContent: 'div(accordion-item);',
            upcast: function (element) {
                return element.name == 'div' && element.hasClass('accordion-item');
            },
            init: function () {
                //called when widget instance is created
                var accordionid = "";
                if(editor.elementPath() != null) {
                    var parents = editor.elementPath().elements;
                    for (i = 0; i < parents.length; i++) {
                        if (parents[i].hasClass('accordion-list-group')) {
                            accordionid = parents[i].getId();
                            break;
                        }
                    }
                }
                if(accordionid == ""){
                    var parents = this.element.getParents();
                    for(i = 0 ; i < parents.length ; i++){
                        if(parents[i].hasClass('accordion-list-group')){
                            accordionid = parents[i].getId();
                            break;
                        }
                    }
                }
                this.setData('accordionId', accordionid);
                this.setData('itemId', 'Collapsible' + (new Date()).getTime());
            },
            data: function () {
                //called whenever the data is updated
                this.element.setAttribute('id', this.data.itemId);

                // var heading = this.element.find('.collapsible-item-heading').$[0];
                // heading.setAttribute('id', 'heading' + this.data.itemId);

                var itemLink = this.element.find('.accordion-title').$[0];
                // var itemIconLink = this.element.find('.collapsible-item-title-link-icon').$[0];
                var newLink = '#collapse' + this.data.itemId;
                itemLink.setAttribute('aria-controls', 'collapse' + this.data.itemId);
                itemLink.setAttribute('href', newLink);
                itemLink.setAttribute('data-cke-saved-href', newLink); //this must be updated as well, otherwise editor will always fallback to old value
                // itemIconLink.setAttribute('aria-controls', 'collapse' + this.data.itemId);
                // itemIconLink.setAttribute('href', newLink);
                // itemIconLink.setAttribute('data-cke-saved-href', newLink);

                if(this.data.accordionId != "") {
                    this.element.find('.accordion-title').$[0].setAttribute('data-parent', "#" + this.data.accordionId);
                    // this.element.find('.collapsible-item-title-link-icon').$[0].setAttribute('data-parent', "#" + this.data.accordionId);
                } else {
                    this.element.find('.accordion-title').$[0].removeAttribute('data-parent');
                    // this.element.find('.collapsible-item-title-link-icon').$[0].removeAttribute('data-parent');
                }

                // this.element.find('.collapsible-item-collapse').$[0].setAttribute('id', 'collapse' + this.data.itemId);
                // this.element.find('.collapsible-item-collapse').$[0].setAttribute('aria-labelledby', 'heading' + this.data.itemId);
            },
        });
    },

    onLoad: function () {
        CKEDITOR.addCss(
            'a.accordion-title { display: block; }' +
            '.accordion-item::before {font-size:10px;color:#000;content: "Collapsible element"}' +
            // '.collapsible-item-heading {background-color:#f4f8ef;color:#72b73a;text-decoration:none;font-size:20px;} ' +
            '.collapsible-item-collapse {display:block;background-color:#ddd;min-height:10px;} ' +
            '.collapsible-item {padding: 8px;margin: 10px;background: #eee;border-radius: 8px;border: 1px solid #ddd;box-shadow: 0 1px 1px #fff inset, 0 -1px 0px #ccc inset;}' +
            '.collapsible-item-title, .collapsible-item-body {box-shadow: 0 1px 1px #ddd inset;border: 1px solid #cccccc;border-radius: 5px;background: #fff;}' +
            '.collapsible-item-title {margin: 0 0 8px;padding: 5px 8px;}' +
            '.collapsible-item-body {padding: 0 8px;}' +
            '.collapsible-item-title-link-text {min-width:50px;display:inline-block;min-height:20px;height:100%;}'
            // '.collapsible-item-title-link-icon {display:inline-block;float:right;}'
        );
    }
});
