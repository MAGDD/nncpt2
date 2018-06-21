
Ext.define("xcpui_object_deleted",
    {
      "scope" : "application",
      "applicationEventType" : "xcpui_object_deleted",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "type",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_on_actionflow_finish",
    {
      "scope" : "actionflow",
      "applicationEventType" : "xcpui_on_actionflow_finish",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "actionflowname",
        "type" : "STRING"
      }, {
        "name" : "laststep",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_on_fragment_unload",
    {
      "scope" : "fragment",
      "applicationEventType" : "xcpui_on_fragment_unload",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "fragmentid",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_on_form_load",
    {
      "scope" : "page",
      "applicationEventType" : "xcpui_on_form_load",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ ]
    }
);

Ext.define("xcpui_refresh_step_page",
    {
      "scope" : "page",
      "applicationEventType" : "xcpui_refresh_step_page",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "step_page_id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_object_modified",
    {
      "scope" : "application",
      "applicationEventType" : "xcpui_object_modified",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "type",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_refresh_fragment_form",
    {
      "scope" : "fragment",
      "applicationEventType" : "xcpui_refresh_fragment_form",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ ]
    }
);

Ext.define("xcp_show_warning",
    {
      "scope" : "application",
      "applicationEventType" : "xcp_show_warning",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "warning_message",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_object_unlocked",
    {
      "scope" : "application",
      "applicationEventType" : "xcpui_object_unlocked",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "type",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_refresh_page_form",
    {
      "scope" : "page",
      "applicationEventType" : "xcpui_refresh_page_form",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ ]
    }
);

Ext.define("xcp_on_preferences_save",
    {
      "scope" : "application",
      "applicationEventType" : "xcp_on_preferences_save",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "role",
        "type" : "STRING"
      }, {
        "name" : "workflowautonexttask",
        "type" : "BOOLEAN"
      }, {
        "name" : "delegate_task",
        "type" : "BOOLEAN"
      }, {
        "name" : "delegatetouser",
        "type" : "STRING"
      }, {
        "name" : "networklocation",
        "type" : "STRING"
      }, {
        "name" : "locale",
        "type" : "STRING"
      }, {
        "name" : "enable_client_plugin",
        "type" : "BOOLEAN"
      } ]
    }
);

Ext.define("xcpui_on_page_load",
    {
      "scope" : "page",
      "applicationEventType" : "xcpui_on_page_load",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "modelname",
        "type" : "STRING"
      }, {
        "name" : "pagename",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_relation_created",
    {
      "scope" : "application",
      "applicationEventType" : "xcpui_relation_created",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_object_locked",
    {
      "scope" : "application",
      "applicationEventType" : "xcpui_object_locked",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "type",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_on_actionflow_cancel",
    {
      "scope" : "actionflow",
      "applicationEventType" : "xcpui_on_actionflow_cancel",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "actionflowname",
        "type" : "STRING"
      }, {
        "name" : "laststep",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_on_navigation",
    {
      "scope" : "application",
      "applicationEventType" : "xcpui_on_navigation",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "previd",
        "type" : "STRING"
      }, {
        "name" : "prevmodelname",
        "type" : "STRING"
      }, {
        "name" : "prevpagename",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_show_notification",
    {
      "scope" : "application",
      "applicationEventType" : "xcp_show_notification",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "notification_message",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_object_imported",
    {
      "scope" : "application",
      "applicationEventType" : "xcpui_object_imported",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "type",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_file_upload_success",
    {
      "scope" : "application",
      "applicationEventType" : "xcpui_file_upload_success",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "fileid",
        "type" : "STRING"
      }, {
        "name" : "filename",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_object_created",
    {
      "scope" : "application",
      "applicationEventType" : "xcpui_object_created",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "type",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_on_form_unload",
    {
      "scope" : "page",
      "applicationEventType" : "xcpui_on_form_unload",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ ]
    }
);

Ext.define("xcpui_on_logout",
    {
      "scope" : "application",
      "applicationEventType" : "xcpui_on_logout",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ ]
    }
);

Ext.define("xcpui_on_page_unload",
    {
      "scope" : "page",
      "applicationEventType" : "xcpui_on_page_unload",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "modelname",
        "type" : "STRING"
      }, {
        "name" : "pagename",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_clear_file_uploaded",
    {
      "scope" : "application",
      "applicationEventType" : "xcpui_clear_file_uploaded",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "fileid",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_file_upload_failure",
    {
      "scope" : "application",
      "applicationEventType" : "xcpui_file_upload_failure",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "filename",
        "type" : "STRING"
      }, {
        "name" : "errormessage",
        "type" : "STRING"
      }, {
        "name" : "errorid",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_on_error",
    {
      "scope" : "application",
      "applicationEventType" : "xcpui_on_error",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "errorcode",
        "type" : "STRING"
      }, {
        "name" : "message",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcp_on_preferences_load",
    {
      "scope" : "application",
      "applicationEventType" : "xcp_on_preferences_load",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "role",
        "type" : "STRING"
      }, {
        "name" : "workflowautonexttask",
        "type" : "BOOLEAN"
      }, {
        "name" : "delegate_task",
        "type" : "BOOLEAN"
      }, {
        "name" : "delegatetouser",
        "type" : "STRING"
      }, {
        "name" : "networklocation",
        "type" : "STRING"
      }, {
        "name" : "locale",
        "type" : "STRING"
      }, {
        "name" : "enable_client_plugin",
        "type" : "BOOLEAN"
      } ]
    }
);

Ext.define("xcpui_object_checkedin",
    {
      "scope" : "application",
      "applicationEventType" : "xcpui_object_checkedin",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "newId",
        "type" : "STRING"
      }, {
        "name" : "type",
        "type" : "STRING"
      }, {
        "name" : "last_checkin_version",
        "type" : "STRING"
      }, {
        "name" : "latest_checkin_version",
        "type" : "STRING"
      }, {
        "name" : "last_modified_date",
        "type" : "DATETIME"
      }, {
        "name" : "latest_modified_date",
        "type" : "DATETIME"
      } ]
    }
);

Ext.define("xcp_navigate_to_page",
    {
      "scope" : "application",
      "applicationEventType" : "xcp_navigate_to_page",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "page_id",
        "type" : "STRING"
      }, {
        "name" : "page_object_id",
        "type" : "STRING"
      }, {
        "name" : "new_browser_tab",
        "type" : "BOOLEAN"
      } ]
    }
);

Ext.define("xcp_show_error",
    {
      "scope" : "application",
      "applicationEventType" : "xcp_show_error",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "error_message",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_file_uploaded_list",
    {
      "scope" : "application",
      "applicationEventType" : "xcpui_file_uploaded_list",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "fileid",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_on_initialize",
    {
      "scope" : "application",
      "applicationEventType" : "xcpui_on_initialize",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ ]
    }
);

Ext.define("xcpui_on_fragment_load",
    {
      "scope" : "fragment",
      "applicationEventType" : "xcpui_on_fragment_load",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "fragmentid",
        "type" : "STRING"
      } ]
    }
);

Ext.define("xcpui_on_navigation_compl",
    {
      "scope" : "application",
      "applicationEventType" : "xcpui_on_navigation_compl",
      "extend" : "xcp.event.ApplicationEvent",
      "fields" : [ {
        "name" : "id",
        "type" : "STRING"
      }, {
        "name" : "modelname",
        "type" : "STRING"
      }, {
        "name" : "pagename",
        "type" : "STRING"
      } ]
    }
);
