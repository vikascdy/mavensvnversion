Ext.onReady(function () {

    var buttongroupIcon = new Ext.widget('CustomButtonGroup', {
        buttonItems:[
            {
                iconCls:'add',
                tooltip:'Add',
                itemId:'addId'
            },
            {
                text:'Edit',
                tooltip:'Edit',
                itemId:'editId'
            },
            {
                iconCls:'delete',
                text:'Delete',
                tooltip:'Delete',
                iconAlign:'right',
                itemId:'deleteId'
            },
            {
                iconCls:'email',
                tooltip:'Email',
                text:'Email',
                itemId:'emailId'
            },
            {
                text:'Export',
                tooltip:'Export',
                itemId:'exportId',
                hidden:false,
                disabled:true
            },
            {
                iconCls:'download',
                text:'Link',
                tooltip:'Link',
                iconAlign:'right',
                itemId:'linkId'
            }
        ]
    });
    buttongroupIcon.render('headerIcon');
});