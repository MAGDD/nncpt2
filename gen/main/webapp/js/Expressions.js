/*
 * Copyright (c) 2011. EMC Corporation. All Rights Reserved.
 */

// Expressions.js

Ext.namespace("xcp");

Ext.define("Expression.IdFromContext",
{
	alias : 'expression.id_from_context',

	statics : {
		evaluate : function () {
			return xcp.navigationManager.currentNavigationContext.objectId;
		}
	}

});

Ext.define("xcp.expression.Generated",{
extend:"xcp.core.expr.BaseExpression",
addFunction : function(functionName, functionBody){
	var functionDefinition ;
	try{ 
		functionDefinition = "xcp.expression.Generated[\"" + functionName + "\"] = " + functionBody;
		eval(functionDefinition)
	}
	catch (e) {
	    if (e instanceof SyntaxError) {
	        console.error("Syntax error: " + e.message + " in function -> " + functionDefinition);
	    }
	}
}, 
singleton:true});

xcp.expression.Generated.addFunction("assign_task_da_actionflow_assign_task_id_1", "function (context) { return this.getValueFromActionFlowInputModel(context,'id'); }");

xcp.expression.Generated.addFunction("assign_task_da_actionflow_assign_task_userName_1", "function (context) { return this.getValueFromWidget(context,'user_from_queue.dropdown_list','value'); }");

xcp.expression.Generated.addFunction("attachment_sel_da_actionflow_attachment_selector_selection_1", "function (context) { return this.getValueFromSelectionModel(context,'attachment_step.results_list','id'); }");

xcp.expression.Generated.addFunction("changeworkqueue_da_actionflow_changeworkqueue_id_1", "function (context) { return this.getValueFromActionFlowInputModel(context,'id'); }");

xcp.expression.Generated.addFunction("changeworkqueue_da_actionflow_changeworkqueue_queueName_1", "function (context) { return this.getValueFromWidget(context,'queue_selection.queue_dropdown_list','value'); }");

xcp.expression.Generated.addFunction("def_imp_af_da_actionflow_def_imp_af_da_def_importtemplate_dm_document_content_id_1", "function (context) { return xcp.widget.selector.FileSelector.getSelectedFileId(context,'def_imp_af_step_1.fileselector'); }");

xcp.expression.Generated.addFunction("def_imp_af_da_actionflow_def_imp_af_da_def_importtemplate_dm_document_folder_id_1", "function (context) { return this.getValueFromWidget(context,'def_imp_af_step_1.imp_folder_selector','value'); }");

xcp.expression.Generated.addFunction("def_imp_af_da_actionflow_def_imp_af_da_def_importtemplate_dm_document_model_1", "function (context) { return this.getValueFromFragmentOutput(context,'def_imp_af_step_1.fragment','model'); }");

xcp.expression.Generated.addFunction("def_imp_af_da_actionflow_def_imp_af_da_def_importtemplate_dm_document_r_object_type_1", "function (context) { return this.getValueFromWidget(context,'def_imp_af_step_1.content_type','value'); }");

xcp.expression.Generated.addFunction("def_imp_af_enablement_finish_1", "function (context) { return ((xcp.widget.selector.FileSelector.getTotalNumberOfFiles(context,'def_imp_af_step_1.fileselector') > 0) && (xcp.widget.selector.FileSelector.areObjectsReady(context,'def_imp_af_step_1.fileselector') == true)); }");

xcp.expression.Generated.addFunction("def_inv_af_da_actionflow_def_inv_af_da_def_importnewversiontemplate_dm_document_checkin_label_1", "function (context) { return this.getValueFromWidget(context,'def_inv_af_step_1.version_label','value'); }");

xcp.expression.Generated.addFunction("def_inv_af_da_actionflow_def_inv_af_da_def_importnewversiontemplate_dm_document_checkin_version_1", "function (context) { return this.getValueFromWidget(context,'def_inv_af_step_1.version','value'); }");

xcp.expression.Generated.addFunction("def_inv_af_da_actionflow_def_inv_af_da_def_importnewversiontemplate_dm_document_content_id_1", "function (context) { return xcp.widget.selector.FileSelector.getSelectedFileId(context,'def_inv_af_step_1.fileselector'); }");

xcp.expression.Generated.addFunction("def_inv_af_da_actionflow_def_inv_af_da_def_importnewversiontemplate_dm_document_id_1", "function (context) { return this.getValueFromActionFlowInputModel(context,'r_object_id'); }");

xcp.expression.Generated.addFunction("def_inv_af_da_actionflow_def_inv_af_da_def_importnewversiontemplate_dm_document_is_current_1", "function (context) { return this.getValueFromWidget(context,'def_inv_af_step_1.is_current','value'); }");

xcp.expression.Generated.addFunction("def_inv_af_da_actionflow_def_inv_af_da_def_importnewversiontemplate_dm_document_model_1", "function (context) { return this.getValueFromFragmentOutput(context,'def_inv_af_step_1.fragment','model'); }");

xcp.expression.Generated.addFunction("def_inv_af_da_actionflow_def_inv_af_da_def_importnewversiontemplate_dm_document_r_object_type_1", "function (context) { return this.getValueFromActionFlowInputModel(context,'r_object_type'); }");

xcp.expression.Generated.addFunction("def_inv_af_da_actionflow_def_inv_af_da_def_importnewversiontemplate_dm_document_retain_lock_1", "function (context) { return this.getValueFromWidget(context,'def_inv_af_step_1.retain_lock','value'); }");

xcp.expression.Generated.addFunction("default_create_docu_da_actionflow_default_create_docu_da_def_create_template_dm_document_folder_id_1", "function (context) { return this.getValueFromWidget(context,'default_create_docu.selector','value'); }");

xcp.expression.Generated.addFunction("default_create_docu_da_actionflow_default_create_docu_da_def_create_template_dm_document_model_1", "function (context) { return this.getValueFromFragmentOutput(context,'default_create_docu.fragment','model'); }");

xcp.expression.Generated.addFunction("default_create_docu_da_actionflow_default_create_docu_da_def_create_template_dm_document_r_object_type_1", "function (context) { return this.getValueFromWidget(context,'default_create_docu.content_type','value'); }");

xcp.expression.Generated.addFunction("default_create_docu_da_actionflow_default_create_docu_da_def_create_template_dm_document_source_1", "function (context) { return this.getValueFromWidget(context,'default_create_docu.doc_template','value'); }");

xcp.expression.Generated.addFunction("default_create_docu_enablement_finish_1", "function (context) { return (this.getValueFromWidget(context,'default_create_docu.content_type','value') != '') && (this.getValueFromWidget(context,'default_create_docu.doc_template','value') != '') && (this.getValueFromFragmentOutputModel(context,'default_create_docu.fragment','model','id') != '') && (this.getValueFromWidget(context,'default_create_docu.selector','value') != '') && (this.getValueFromWidget(context,'default_create_docu.selector','value') != '0000000000000000'); }");

xcp.expression.Generated.addFunction("default_create_docu_enablement_viewState_default_create_docu_1", "function (context) { return false; }");

xcp.expression.Generated.addFunction("default_create_fold_da_actionflow_default_create_fold_da_def_create_template_dm_folder_folder_id_1", "function (context) { return this.getValueFromWidget(context,'def_create_folder_af_.parent_folder_selector','value'); }");

xcp.expression.Generated.addFunction("default_create_fold_da_actionflow_default_create_fold_da_def_create_template_dm_folder_model_1", "function (context) { return this.getValueFromFragmentOutput(context,'def_create_folder_af_.fragment','model'); }");

xcp.expression.Generated.addFunction("default_create_fold_da_actionflow_default_create_fold_da_def_create_template_dm_folder_r_object_type_1", "function (context) { return this.getValueFromWidget(context,'def_create_folder_af_.folder_type','value'); }");

xcp.expression.Generated.addFunction("default_create_fold_enablement_viewState_def_create_folder_af__1", "function (context) { return false; }");

xcp.expression.Generated.addFunction("hold_task_da_actionflow_hold_task_holdUntil_1", "function (context) { return this.getValueFromWidget(context,'hold_task.hold_until','value'); }");

xcp.expression.Generated.addFunction("hold_task_da_actionflow_hold_task_id_1", "function (context) { return this.getValueFromActionFlowInputModel(context,'id'); }");

xcp.expression.Generated.addFunction("reassign_task_da_actionflow_reassign_task_id_1", "function (context) { return this.getValueFromActionFlowInputModel(context,'id'); }");

xcp.expression.Generated.addFunction("reassign_task_da_actionflow_reassign_task_userName_1", "function (context) { return this.getValueFromWidget(context,'user_from_queue.dropdown_list','value'); }");

xcp.expression.Generated.addFunction("selector_content_da_actionflow_selector_content_selection_1", "function (context) { return this.getValueFromSelectionModel(context,'selector_content_st.results_list','id'); }");

xcp.expression.Generated.addFunction("selector_folder_da_actionflow_selector_folder_selection_1", "function (context) { return this.getValueFromSelectionModel(context,'selector_folder_ste.results_list','id'); }");

xcp.expression.Generated.addFunction("t2_attachment_step_folderQuery_1_folder_id_1", "function (context) { return xcp.widget.ContentTree.getSelectedNodeId(context,'content_tree'); }");

xcp.expression.Generated.addFunction("t2_def_create_folder_af__fetchtypes_initiate_staless_ds_processVariables_inputs_1", "function (context) { return xcp.functions.internal.getAllTypes('folder', true, this.getValueFromActionFlowInputModel(context,'folder_types')); }");

xcp.expression.Generated.addFunction("t2_def_create_folder_af__fetchtypes_initiate_staless_ds_processVariables_inputs_label_1", "function (context) { return xcp.functions.internal.getAllTypes('folder', true, this.getValueFromActionFlowInputModel(context,'folder_types'), true); }");

xcp.expression.Generated.addFunction("t2_def_create_folder_af__fragment_fragmentId_1", "function (context) { return xcp.functions.fragment.getFragment(this.getValueFromWidget(context,'folder_type','value'), '_create'); }");

xcp.expression.Generated.addFunction("t2_def_imp_af_step_1_fetchcontentformats_initiate_staless_ds_processVariables_dos_extension_1", "function (context) { return xcp.functions.ifThenElse(xcp.functions.containsString(this.getValueFromActionFlowInputModel(context,'content_formats'), xcp.widget.selector.FileSelector.getSelectedFileExtension(context,'fileselector'), true), xcp.widget.selector.FileSelector.getSelectedFileExtension(context,'fileselector'), 'INTERNAL_FETCHNODATA'); }");

xcp.expression.Generated.addFunction("t2_def_imp_af_step_1_fetchtypes_initiate_staless_ds_processVariables_inputs_1", "function (context) { return xcp.functions.internal.getAllTypes('document', false, this.getValueFromActionFlowInputModel(context,'content_types')); }");

xcp.expression.Generated.addFunction("t2_def_imp_af_step_1_fetchtypes_initiate_staless_ds_processVariables_inputs_label_1", "function (context) { return xcp.functions.internal.getAllTypes('document', false, this.getValueFromActionFlowInputModel(context,'content_types'), true); }");

xcp.expression.Generated.addFunction("t2_def_imp_af_step_1_fragment_content_format_1", "function (context) { return this.getValueFromWidget(context,'content_format','value'); }");

xcp.expression.Generated.addFunction("t2_def_imp_af_step_1_fragment_content_type_1", "function (context) { return this.getValueFromWidget(context,'content_type','value'); }");

xcp.expression.Generated.addFunction("t2_def_imp_af_step_1_fragment_fragmentId_1", "function (context) { return xcp.functions.fragment.getFragment(this.getValueFromWidget(context,'content_type','value'), '_imp'); }");

xcp.expression.Generated.addFunction("t2_def_imp_af_step_1_fragment_object_name_1", "function (context) { return xcp.widget.selector.FileSelector.getSelectedFileName(context,'fileselector'); }");

xcp.expression.Generated.addFunction("t2_def_inv_af_step_1_fragment_fragmentId_1", "function (context) { return xcp.functions.fragment.getFragment(this.getValueFromActionFlowInputModel(context,'r_object_type'), '_chk'); }");

xcp.expression.Generated.addFunction("t2_def_inv_af_step_1_fragment_id_1", "function (context) { return this.getValueFromActionFlowInputModel(context,'r_object_id'); }");

xcp.expression.Generated.addFunction("t2_default_create_docu_ds_collection_content_templates_a_content_type_1", "function (context) { return this.getValueFromWidget(context,'content_format','value'); }");

xcp.expression.Generated.addFunction("t2_default_create_docu_ds_collection_content_templates_r_object_type_1", "function (context) { return this.getValueFromWidget(context,'content_type','value'); }");

xcp.expression.Generated.addFunction("t2_default_create_docu_fetchtypes_initiate_staless_ds_processVariables_inputs_1", "function (context) { return xcp.functions.internal.getAllTypes('document', false, this.getValueFromActionFlowInputModel(context,'content_types')); }");

xcp.expression.Generated.addFunction("t2_default_create_docu_fetchtypes_initiate_staless_ds_processVariables_inputs_label_1", "function (context) { return xcp.functions.internal.getAllTypes('document', false, this.getValueFromActionFlowInputModel(context,'content_types'), true); }");

xcp.expression.Generated.addFunction("t2_default_create_docu_fragment_fragmentId_1", "function (context) { return xcp.functions.fragment.getFragment(this.getValueFromWidget(context,'content_type','value'), '_chk'); }");

xcp.expression.Generated.addFunction("t2_default_create_docu_fragment_id_1", "function (context) { return this.getValueFromWidget(context,'doc_template','value'); }");

xcp.expression.Generated.addFunction("t2_dm_document_da_def_delete_dm_document_dm_document_id_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }");

xcp.expression.Generated.addFunction("t2_dm_document_def_inv_af_dm_document_r_object_id_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }");

xcp.expression.Generated.addFunction("t2_dm_document_def_inv_af_dm_document_r_object_type_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_document','r_object_type'); }");

xcp.expression.Generated.addFunction("t2_dm_folder_da_def_delete_dm_folder_dm_folder_id_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }");

xcp.expression.Generated.addFunction("t2_dm_folder_def_imp_af_dm_folder_folder_id_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }");

xcp.expression.Generated.addFunction("t2_dm_folder_default_create_docu_dm_folder_folder_id_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }");

xcp.expression.Generated.addFunction("t2_dm_folder_default_create_fold_dm_folder_parent_folder_id_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }");

xcp.expression.Generated.addFunction("t2_edit_base_content_comments_objectId_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }");

xcp.expression.Generated.addFunction("t2_edit_base_content_da_def_update_dm_document_id_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }");

xcp.expression.Generated.addFunction("t2_edit_base_content_da_def_update_dm_document_object_name_1", "function (context) { return this.getValueFromWidget(context,'object_name','value'); }");

xcp.expression.Generated.addFunction("t2_edit_base_content_r_lock_owner_hidden_1", "function (context) { return xcp.functions.length(this.getValueFromModel(context,'xcp_dm_document','r_lock_owner')) == 0; }");

xcp.expression.Generated.addFunction("t2_edit_base_content_r_lock_owner_value_1", "function (context) { return xcp.functions.lockStatus(this.getValueFromModel(context,'xcp_dm_document','r_lock_date'), this.getValueFromModel(context,'xcp_dm_document','r_lock_owner')); }");

xcp.expression.Generated.addFunction("t2_edit_base_content_viewer_contentType_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_document','a_content_type'); }");

xcp.expression.Generated.addFunction("t2_edit_base_content_viewer_objectId_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }");

xcp.expression.Generated.addFunction("t2_edit_base_folder_da_def_update_dm_folder_id_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }");

xcp.expression.Generated.addFunction("t2_edit_base_folder_da_def_update_dm_folder_object_name_1", "function (context) { return this.getValueFromWidget(context,'object_name','value'); }");

xcp.expression.Generated.addFunction("t2_forward_activity_activity_list_initiate_staless_ds_1_processVariables_id_1", "function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }");

xcp.expression.Generated.addFunction("t2_forward_activity_activity_list_initiate_staless_ds_1_processVariables_port_type_1", "function (context) { return 'INPUT'; }");

xcp.expression.Generated.addFunction("t2_forward_activity_multi_activity_list_initiate_staless_ds_1_processVariables_id_1", "function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }");

xcp.expression.Generated.addFunction("t2_forward_activity_multi_activity_list_initiate_staless_ds_1_processVariables_port_type_1", "function (context) { return 'INPUT'; }");

xcp.expression.Generated.addFunction("t2_reject_activity_activity_list_initiate_staless_ds_1_processVariables_id_1", "function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }");

xcp.expression.Generated.addFunction("t2_reject_activity_activity_list_initiate_staless_ds_1_processVariables_port_type_1", "function (context) { return 'REVERT'; }");

xcp.expression.Generated.addFunction("t2_reject_activity_multi_activity_list_initiate_staless_ds_1_processVariables_id_1", "function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }");

xcp.expression.Generated.addFunction("t2_reject_activity_multi_activity_list_initiate_staless_ds_1_processVariables_port_type_1", "function (context) { return 'REVERT'; }");

xcp.expression.Generated.addFunction("t2_selector_content_st_content_rt_query_input_contenttype_1", "function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('contenttype'); }");

xcp.expression.Generated.addFunction("t2_selector_content_st_content_rt_query_input_name_1", "function (context) { return this.getValueFromWidget(context,'text_input','value'); }");

xcp.expression.Generated.addFunction("t2_selector_folder_ste_folder_rt_query_1_input_folder_id_1", "function (context) { return this.getValueFromWidget(context,'text_input','value'); }");

xcp.expression.Generated.addFunction("t2_signoff_forward_multi_activity_list_initiate_staless_ds_1_processVariables_id_1", "function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }");

xcp.expression.Generated.addFunction("t2_signoff_forward_multi_activity_list_initiate_staless_ds_1_processVariables_port_type_1", "function (context) { return 'INPUT'; }");

xcp.expression.Generated.addFunction("t2_signoff_forward_one_activity_list_initiate_staless_ds_1_processVariables_id_1", "function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }");

xcp.expression.Generated.addFunction("t2_signoff_forward_one_activity_list_initiate_staless_ds_1_processVariables_port_type_1", "function (context) { return 'INPUT'; }");

xcp.expression.Generated.addFunction("t2_signoff_reject_multi_activity_list_initiate_staless_ds_1_processVariables_id_1", "function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }");

xcp.expression.Generated.addFunction("t2_signoff_reject_multi_activity_list_initiate_staless_ds_1_processVariables_port_type_1", "function (context) { return 'REVERT'; }");

xcp.expression.Generated.addFunction("t2_signoff_reject_one_activity_list_initiate_staless_ds_1_processVariables_id_1", "function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }");

xcp.expression.Generated.addFunction("t2_signoff_reject_one_activity_list_initiate_staless_ds_1_processVariables_port_type_1", "function (context) { return 'REVERT'; }");

xcp.expression.Generated.addFunction("t2_signoff_usergroup_multi_userorgroup_selecti_staless_ds_1_processVariables_starts_with_filter_1", "function (context) { return this.getValueFromWidget(context,'text_input','value'); }");

xcp.expression.Generated.addFunction("t2_signoff_usergroup_userorgroup_selecti_staless_ds_1_processVariables_starts_with_filter_1", "function (context) { return this.getValueFromWidget(context,'text_input','value'); }");

xcp.expression.Generated.addFunction("t2_user_from_queue_user_from_queue_initiate_staless_ds_1_processVariables_id_1", "function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('id'); }");

xcp.expression.Generated.addFunction("t2_usergroup_selection_multi_userorgroup_selecti_staless_ds_1_processVariables_starts_with_filter_1", "function (context) { return this.getValueFromWidget(context,'text_input','value'); }");

xcp.expression.Generated.addFunction("t2_usergroup_selection_userorgroup_selecti_staless_ds_1_processVariables_starts_with_filter_1", "function (context) { return this.getValueFromWidget(context,'text_input','value'); }");

xcp.expression.Generated.addFunction("t2_view_base_content_comments_objectId_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }");

xcp.expression.Generated.addFunction("t2_view_base_content_da_def_delete_dm_document_id_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }");

xcp.expression.Generated.addFunction("t2_view_base_content_def_inv_af_1_r_object_id_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }");

xcp.expression.Generated.addFunction("t2_view_base_content_def_inv_af_1_r_object_type_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_document','r_object_type'); }");

xcp.expression.Generated.addFunction("t2_view_base_content_r_lock_owner_hidden_1", "function (context) { return xcp.functions.length(this.getValueFromModel(context,'xcp_dm_document','r_lock_owner')) == 0; }");

xcp.expression.Generated.addFunction("t2_view_base_content_r_lock_owner_value_1", "function (context) { return xcp.functions.lockStatus(this.getValueFromModel(context,'xcp_dm_document','r_lock_date'), this.getValueFromModel(context,'xcp_dm_document','r_lock_owner')); }");

xcp.expression.Generated.addFunction("t2_view_base_content_viewer_contentType_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_document','a_content_type'); }");

xcp.expression.Generated.addFunction("t2_view_base_content_viewer_objectId_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_document','id'); }");

xcp.expression.Generated.addFunction("t2_view_base_folder_da_def_delete_dm_folder_id_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }");

xcp.expression.Generated.addFunction("t2_view_base_folder_def_imp_af_1_folder_id_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }");

xcp.expression.Generated.addFunction("t2_view_base_folder_default_create_docu_1_folder_id_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }");

xcp.expression.Generated.addFunction("t2_view_base_folder_default_create_fold_1_parent_folder_id_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }");

xcp.expression.Generated.addFunction("t2_view_base_folder_folderQuery_folder_id_1", "function (context) { return this.getValueFromModel(context,'xcp_dm_folder','id'); }");

xcp.expression.Generated.addFunction("xcp_attachment_step_content_tree_folderRoot_1", "function (context) { return xcp.functions.internal.getValueFromActionFlowInputModel('folderRoot'); }");

xcp.expression.Generated.addFunction("xcp_def_create_folder_af__folder_type_value_1", "function (context) { return this.getValueFromActionFlowInputModel(context,'default_folder_type'); }");

xcp.expression.Generated.addFunction("xcp_def_create_folder_af__parent_folder_selector_value_1", "function (context) { return this.getValueFromActionFlowInputModel(context,'parent_folder_id'); }");

xcp.expression.Generated.addFunction("xcp_def_imp_af_step_1_card_container_removeChild_1", "function (context) { return xcp.widget.selector.FileSelector.getRemovedFileId(context,'fileselector'); }");

xcp.expression.Generated.addFunction("xcp_def_imp_af_step_1_card_container_selectChild_1", "function (context) { return xcp.widget.selector.FileSelector.getSelectedFileId(context,'fileselector'); }");

xcp.expression.Generated.addFunction("xcp_def_imp_af_step_1_content_format_value_1", "function (context) { return this.getValueFromActionFlowInputModel(context,'default_content_format'); }");

xcp.expression.Generated.addFunction("xcp_def_imp_af_step_1_content_type_value_1", "function (context) { return this.getValueFromActionFlowInputModel(context,'default_content_type'); }");

xcp.expression.Generated.addFunction("xcp_def_imp_af_step_1_fileselector_fileIDs_1", "function (context) { return this.getValueFromEvent(context,'xcpui_file_uploaded_list','fileid'); }");

xcp.expression.Generated.addFunction("xcp_def_imp_af_step_1_fileselector_uploadURL_1", "function (context) { return xcp.functions.internal.getFileUploadUrl(); }");

xcp.expression.Generated.addFunction("xcp_def_imp_af_step_1_imp_folder_selector_value_1", "function (context) { return this.getValueFromActionFlowInputModel(context,'folder_id'); }");

xcp.expression.Generated.addFunction("xcp_def_inv_af_step_1_card_container_removeChild_1", "function (context) { return xcp.widget.selector.FileSelector.getRemovedFileId(context,'fileselector'); }");

xcp.expression.Generated.addFunction("xcp_def_inv_af_step_1_card_container_selectChild_1", "function (context) { return xcp.widget.selector.FileSelector.getSelectedFileId(context,'fileselector'); }");

xcp.expression.Generated.addFunction("xcp_def_inv_af_step_1_fileselector_fileIDs_1", "function (context) { return this.getValueFromEvent(context,'xcpui_file_uploaded_list','fileid'); }");

xcp.expression.Generated.addFunction("xcp_def_inv_af_step_1_fileselector_uploadURL_1", "function (context) { return xcp.functions.internal.getFileUploadUrl(); }");

xcp.expression.Generated.addFunction("xcp_default_create_docu_content_format_value_1", "function (context) { return this.getValueFromActionFlowInputModel(context,'default_content_format'); }");

xcp.expression.Generated.addFunction("xcp_default_create_docu_content_type_value_1", "function (context) { return this.getValueFromActionFlowInputModel(context,'default_content_type'); }");

xcp.expression.Generated.addFunction("xcp_default_create_docu_doc_template_disabled_1", "function (context) { return this.getValueFromWidget(context,'content_type','value') == ''; }");

xcp.expression.Generated.addFunction("xcp_default_create_docu_selector_value_1", "function (context) { return this.getValueFromActionFlowInputModel(context,'folder_id'); }");

xcp.expression.Generated.addFunction("xcp_default_create_docu_viewer_contentType_1", "function (context) { return this.getValueFromFragmentOutputModel(context,'fragment','model','a_content_type'); }");

xcp.expression.Generated.addFunction("xcp_default_create_docu_viewer_objectId_1", "function (context) { return this.getValueFromFragmentOutputModel(context,'fragment','model','id'); }");

xcp.expression.Generated.addFunction("xcp_default_create_fold_input_default_folder_type", "function (context) { return 'xcp_dm_folder'; }");

xcp.expression.Generated.addFunction("xcp_dm_document_chk_model_1", "function (context) { return this.getModel(context,'xcp_dm_document','','dm_document'); }");

xcp.expression.Generated.addFunction("xcp_dm_document_chk_model_object_name_1", "function (context) { return this.getValueFromWidget(context,'object_name','value'); }");

xcp.expression.Generated.addFunction("xcp_dm_document_imp_model_1", "function (context) { return this.getModel(context,'xcp_dm_document_template','','dm_document'); }");

xcp.expression.Generated.addFunction("xcp_dm_document_imp_model_a_content_type_1", "function (context) { return this.getValueFromFragmentInput(context,'content_format'); }");

xcp.expression.Generated.addFunction("xcp_dm_document_imp_model_object_name_1", "function (context) { return this.getValueFromWidget(context,'object_name','value'); }");

xcp.expression.Generated.addFunction("xcp_dm_document_imp_object_name_value_1", "function (context) { return this.getValueFromFragmentInput(context,'object_name'); }");

xcp.expression.Generated.addFunction("xcp_dm_folder_create_model_1", "function (context) { return this.getModel(context,'xcp_dm_folder_template','','dm_folder'); }");

xcp.expression.Generated.addFunction("xcp_dm_folder_create_model_object_name_1", "function (context) { return this.getValueFromWidget(context,'object_name','value'); }");

xcp.expression.Generated.addFunction("xcp_dm_folder_create_model_r_folder_path_1", "function (context) { return this.getValueFromFragmentInput(context,'folder_path'); }");

xcp.expression.Generated.addFunction("xcp_dm_folder_create_object_name_value_1", "function (context) { return this.getValueFromFragmentInput(context,'object_name'); }");

xcp.expression.Generated.addFunction("xcp_hold_task_hold_until_value_1", "function (context) { return xcp.functions.addDays(xcp.functions.today(), 1); }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_column_box3_hidden_1", "function (context) { return this.getValueFromWidget(context,'delegate_task','value') != true; }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_delegate_task_1", "function (context) { return this.getValueFromWidget(context,'delegate_task','value'); }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_delegate_task_value_1", "function (context) { return this.getValueFromEvent(context,'xcp_on_preferences_load','delegate_task'); }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_delegatetouser_1", "function (context) { return this.getValueFromWidget(context,'delegatetouser','value'); }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_delegatetouser_disabled_1", "function (context) { return this.getValueFromWidget(context,'delegate_task','value') != true; }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_delegatetouser_hidden_1", "function (context) { return this.getValueFromWidget(context,'delegate_task','value') != true; }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_delegatetouser_value_1", "function (context) { return this.getValueFromEvent(context,'xcp_on_preferences_load','delegatetouser'); }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_enable_client_plugin_1", "function (context) { return this.getValueFromWidget(context,'enable_client_plugin','value'); }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_enable_client_plugin_value_1", "function (context) { return this.getValueFromEvent(context,'xcp_on_preferences_load','enable_client_plugin'); }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_locale_1", "function (context) { return this.getValueFromWidget(context,'locale','value'); }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_locale_value_1", "function (context) { return this.getValueFromEvent(context,'xcp_on_preferences_load','locale'); }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_networklocation_1", "function (context) { return this.getValueFromWidget(context,'networklocation','value'); }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_networklocation_value_1", "function (context) { return this.getValueFromEvent(context,'xcp_on_preferences_load','networklocation'); }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_page_id_1", "function (context) { return 'xcp_user_preferences'; }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_role_1", "function (context) { return this.getValueFromWidget(context,'role','value'); }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_role_value_1", "function (context) { return this.getValueFromEvent(context,'xcp_on_preferences_load','role'); }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_workflowautonexttask_1", "function (context) { return this.getValueFromWidget(context,'workflowautonexttask','value'); }");

xcp.expression.Generated.addFunction("xcp_user_preferences_fr_workflowautonexttask_value_1", "function (context) { return this.getValueFromEvent(context,'xcp_on_preferences_load','workflowautonexttask'); }");

