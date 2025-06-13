const data = [
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.testrksdkautosubmit2",
    name: "AutomationProject_with_manualsdk",
    description: "manually added sdks",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.testrksdkautosubmit",
    name: "AutomationProject_with_sdk",
    description: "automatically added sdk",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.testrksbpasubmit",
    name: "Process_with_SBPA",
    description: "SBPA project with SBPA dependencies",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.testrksdk",
    name: "Process_with_manualSdk",
    description: "manual sdk added to a process project",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.artworkordersinbound",
    name: "Artworks order inbound",
    description: "sample submission for events",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.journalentryevents11",
    name: "Journal entry events",
    description: "sample summary for events",
  },
  {
    id: "eu10.cim-dev-eu10-004-dev-exp-wf.approvalworkflowactions",
    name: "Approval workflow actions",
    description: "sample action submission",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.sbpatestpatch6",
    name: "HR onboarding for canada",
    description: "sample submission summary",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.salesorderapprovalprocess1",
    name: "Sales order approval process",
    description: "sample submission for Sales order approval process",
  },
  {
    id: "f3a02142-c629-448c-987d-94fff2b4e9be",
    name: "checking",
    description: "ch",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.s4leaverequestapprovalprocessextension",
    name: "s4 leave request approval process",
    description: "This process contains leave request approval flow",
  },
  {
    id: "2657d608-e472-48fa-89cf-9cc19abad07f",
    name: "IRPAStorePackageSubmission",
    description: "IRPAStorePackageSubmission",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.billingdocumenteventsforreview",
    name: "Billing document events",
    description:
      "Informs a remote system about created, changed, and canceled billing documents",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.purchaserequisitionlev",
    name: "Purchase requisition",
    description:
      "This service helps you to create, read, update and delete purchase requisitions",
  },
  {
    id: "eu10.sap-build-eu10-trial.salesordersmanagementi552711",
    name: "Sales Order Management",
    description: "This content can be used for managing the sales order",
  },
  {
    id: "3fe92219-2e96-442c-9e7d-08764636f370",
    name: "ProjectMaintenance",
    description: "ProjectMaintenance",
  },
  {
    id: "105f6259-cdaf-414b-86ea-5bc670448046",
    name: "Excel SDK",
    description:
      "The Excel SDK package is a collection of activities allowing you to create automations using Microsoft Excel.",
  },
  {
    id: "835f079e-5f78-482a-aa13-c2b490203613",
    name: "Powerpoint SDK",
    description:
      "The PowerPoint SDK package is a collection of activities allowing you to create automations using Microsoft PowerPoint.",
  },
  {
    id: "7eeebf51-8d31-418b-be79-d5ba7a68987d",
    name: "Document Information Extraction SDK",
    description:
      "The Document Information Extraction SDK is a collection of activities for extracting and enriching information using Document Information Extraction service.",
  },
  {
    id: "8616edfd-2fa3-4c17-a19b-cb13d455ce1e",
    name: "Google Vision AI SDK",
    description:
      "The Google Vision AI SDK is a collection of activities allowing you to extract data from documents using Google Vision AI capabilities.",
  },
  {
    id: "2940834f-ef37-4ee1-9845-d6b8d370fdd6",
    name: "PDF SDK",
    description:
      "The SAPUI5 PDF package is a collection of activities allowing you to create automations using PDF.",
  },
  {
    id: "ac5eb0d6-8e8e-494e-ae8b-6031832d410a",
    name: "Word SDK",
    description:
      "The Word SDK package is a collection of activities allowing you to create automations using Microsoft Word.",
  },
  {
    id: "e5dadd38-93e2-423a-8126-69aecb04b92b",
    name: "Outlook SDK",
    description:
      "The Outlook SDK package is a collection of activities allowing you to create automations using Microsoft Outlook.",
  },
  {
    id: "12552390-cdd0-41c4-befc-3fff549060c5",
    name: "Microsoft 365 Cloud SDK",
    description:
      "The Microsoft 365 Cloud SDK package is a collection of activities allowing you to create automations on Office objects in Microsoft Cloud.",
  },
  {
    id: "d8ae7d93-588a-436b-ad0c-c5b0f113c78d",
    name: "SAP GUI for HTML SDK",
    description:
      "The SAP GUI for HTML SDK package is a collection of activities allowing you to create automations using SAP GUI for HTML.",
  },
  {
    id: "a221da77-3b85-49a2-af25-4f7689307e0d",
    name: "Web SDK",
    description: "The Web SDK Package helps you automate web applications.",
  },
  {
    id: "8f09ae29-27d3-49fc-a7b8-000c2427c052",
    name: "SAP SuccessFactors SDK",
    description:
      "The SuccessFactors SDK package is a collection of activities allowing you to easily automate SAP SuccessFactors.",
  },
  {
    id: "ab65d9ab-3f49-4db1-968d-324d9aa18757",
    name: "SAPUI5 SDK",
    description:
      "The SAPUI5 SDK package is a collection of activities allowing you to create automations using SAPUI5.",
  },
  {
    id: "fe81ed84-69cb-49b0-b544-6680b9683eb6",
    name: "BAPI SDK",
    description:
      "The BAPI SDK package is a collection of activities allowing you to create automations in SAP system by calling BAPI.",
  },
  {
    id: "1c0b0383-0db2-4038-89d7-18d2d763ad62",
    name: "Ariba SDK",
    description:
      "The ARIBA SDK package is a collection of activities allowing you to create automations using SAP Ariba.",
  },
  {
    id: "cd968c00-74a3-4df3-ae8c-27e7f726bb0f",
    name: "Google Workspace SDK",
    description:
      "The Google Workspace SDK package is a collection of activities allowing you to automate Google Workspace products.",
  },
  {
    id: "53fabc17-0a59-45df-8e9f-68387881fb14",
    name: "Google Cloud Storage SDK",
    description:
      "The Google Cloud Storage SDK package is a collection of activities allowing you to automate the Google Cloud Storage product.",
  },
  {
    id: "8240546e-1fa0-4135-b154-6bbc3cf79797",
    name: "Google Document AI SDK",
    description:
      "As part of the integration of SAP Build Process Automation with Google AI Services, the Google Document AI SDK is a collection of activities that allow you to automate document processing using Google Document AI.",
  },
  {
    id: "f3fecb5c-73c0-4060-a2c9-d561bc4df9c3",
    name: "Google Authorization SDK",
    description:
      "The Google Authorization SDK package is a collection of activities allowing you to authorize and access Google Workspace products and Google Document AI.",
  },
  {
    id: "a93a704c-3b18-4ce6-9909-2c270d77f395",
    name: "Java SDK",
    description:
      "The Java SDK package is a collection of activities allowing you to automate Java applications made based on frameworks such as Java Swing , JavaFX.",
  },
  {
    id: "2dbcfd22-58ea-49a2-99d6-005f5bb902c3",
    name: "Core SDK",
    description:
      "The Core SDK package contains main methods and functions you use to build and run your automation projects.",
  },
  {
    id: "com.sap.content.ecc.purchaseorderapprovalandcreation",
    name: "Manage Purchase Order Approval and Creation",
    description:
      "Automate and manage the approvals and creation of Purchase Orders in SAP ERP with approvals performed in SAP Workflow Management or SAP Build Process Automation.",
  },
  {
    id: "visibilityOnProcureToPay",
    name: "Visibility on Procure to Pay",
    description:
      "Gain real-time process visibility and insight-to-action in your procurement operations.",
  },
  {
    id: "visibilityOnOrderToCash",
    name: "Visibility on Order to Cash",
    description:
      "Gain real-time visibility and insight-to-action on your order-to-cash process to ensure on-time delivery and improve customer satisfaction",
  },
  {
    id: "visibilityOnAccountsReceivable",
    name: "Visibility on Accounts Receivable",
    description:
      "Gain real-time process visibility and insight-to-action on the accounts receivables process and ensure on time collections",
  },
  {
    id: "visibilityOnAccountsPayable",
    name: "Visibility on Accounts Payable",
    description:
      "Gain real-time process visibility and insight-to-action on the accounts payable process and ensure on time payments",
  },
  {
    id: "vendoronboarding",
    name: "Vendor Onboarding",
    description:
      "Create a new vendor in SAP ERP with business validations and approvals using SAP Workflow Management or SAP Build Process Automation.",
  },
  {
    id: "com.sap.content.translatejobposting.translatejobpostings",
    name: "Translate Job Postings",
    description:
      "This template is used to translate job requisitions from SAP SuccessFactor using the SAP Document Translation Service.",
  },
  {
    id: "com.sap.content.stockclearance",
    name: "Stock Clearance",
    description:
      "Automatically send notifications and the AVIS list regarding stock clearance to responsible stock clearance admin.",
  },
  {
    id: "com.sap.content.servconnotif",
    name: "Service Confirmation Notification",
    description:
      "Enhance the standard Service Confirmation process by automatically sending out a notification.",
  },
  {
    id: "com.sap.content.energization",
    name: "Reconnection Process",
    description:
      "Automate and manage approvals for creating reconnection order and update the meter reading for utilities reconnection process in SAP S/4HANA using SAP BTP.",
  },
  {
    id: "sap.com.aribaprocessvisibility",
    name: "Real time Visibility into SAP Ariba Procurement Operations",
    description:
      "Real time visibility into Ariba Procurement Operations (P2O). Procurement Operation teams could track their key performance indicators and gain real time insight into Procure to Order process.",
  },
  {
    id: "com.sap.content.realestatecontractvaluationpostingapproval",
    name: "Real Estate Contract Valuation Posting Approval",
    description:
      "Real Estate Contract Valuation Posting Approval is to have a process in place for Right-of-Use asset values in case of any changes to contract.",
  },
  {
    id: "purchaserequisitionheaderapprovalandrelease",
    name: "Purchase Requisition Header Approval and Release",
    description:
      "Purchase Requisition Approval at Header level by including all line items using SAP Workflow Management or SAP Build Process Automation.",
  },
  {
    id: "com.sap.content.purchaseorderchange",
    name: "Purchase Order Change",
    description:
      "Standardize the process of changing project related purchase order when issues happen during project execution using SAP S/4HANA Cloud for Projects, Project Collaboration.",
  },
  {
    id: "com.sap.content.procuretoorder",
    name: "Procure to Order",
    description:
      "Content package include Purchase Requisition Approval  ,Release and Purchase Order creation. This include Purchase Requisition approvals at Items level, Header level and Purchase Order creation.",
  },
  {
    id: "com.sap.content.pmordersdatechangenotif",
    name: "Plant Maintenance Order Date Change Notification",
    description:
      "Respond to delayed delivery of non-stock parts needed for maintenance orders using automatic/manual decisions",
  },
  {
    id: "com.sap.content.nonoperatedjointventurecashcallapproval",
    name: "Non Operated Joint Venture Cash Call Approval",
    description:
      "Approval Workflow for Joint Venture Non-Operated Cash call and Billing Invoice",
  },
  {
    id: "com.sap.mdg.masterdataprocessvisualization",
    name: "Master Data Process Visualization",
    description:
      "The Master Data Process Visualization content package for SAP Master Data Governance, cloud edition",
  },
  {
    id: "com.sap.mdg.mdgprocessworkflowandvisualization",
    name: "Master Data Process Approval and Visualization",
    description:
      "Approve, and confirm master data process created using Cloud-Ready Mode in SAP Master Data Governance, visualize MDG process steps and associated workflow together in graphic view. This also includes federation process across multiple MDG systems.",
  },
  {
    id: "com.sap.content.managesalesquotations",
    name: "Manage Sales Quotations",
    description:
      "Manage the approvals of Sales Quotation marked for external approval in SAP S/4HANA Sales and Distribution application",
  },
  {
    id: "com.sap.content.managesalesorders",
    name: "Manage Sales Orders",
    description:
      "Automate and manage the approvals of Sales Orders in SAP S/4HANA with validations and approvals performed in SAP Workflow Management or SAP Build Process Automation.",
  },
  {
    id: "com.sap.content.emissiondatamanagement",
    name: "Manage Emissions Data",
    description:
      "Collect and Monitor the Emission data  at different frequencies before posting the data into SAP S/4HANA systems.",
  },
  {
    id: "com.sap.content.sobillblk.managedeliveryandbillingblockinsalesorder",
    name: "Manage Delivery and Billing Block in Sales Order",
    description:
      "Automate the removal of delivery and billing block in sales order using BTP Workflow and Business Rules capabilities of Workflow Management or SAP Build Process Automation.",
  },
  {
    id: "com.sap.content.managecreditmemorequests",
    name: "Manage Credit Memo Requests",
    description:
      "Automate and manage the approvals of Credit Memo Requests in SAP S/4HANA with validations and approvals performed in SAP Build Process Automation or SAP Workflow Management",
  },
  {
    id: "com.sap.content.releasesalesordercreditblock",
    name: "Manage Credit Block on Sales Order",
    description:
      "Manage Credit Block on Sales Order content package enables SAP S/4HANA customers to review the sales orders which are credit blocked and decide about release or reject using SAP Workflow Management or SAP Build Process Automation.",
  },
  {
    id: "com.sap.content.astretire.manageassetretirement",
    name: "Manage Asset Retirement",
    description:
      "Automate the deactivation of equipment, work orders, notifications, maintenance plans and retirement of asset.",
  },
  {
    id: "com.sap.content.assetleaseterminationapproval",
    name: "Leased Asset Termination Approval",
    description:
      "Leased Asset Termination Approval package enables user to raise approval request for early termination of lease contracts.",
  },
  {
    id: "com.sap.content.journalentrypostingapproval",
    name: "Journal Entry Posting Approval",
    description:
      "Journal Entry Posting Approval content package enables to create, validate, approve and post Journal Entries to SAP S/4HANA",
  },
  {
    id: "com.sap.content.insighttoactionworkflows",
    name: "Insight To Action Workflows",
    description:
      "Insight to action workflows to enable actions  in Process Visibility scenarios using SAP Build Process Automation or SAP Workflow Management",
  },
  {
    id: "com.sap.content.handletenantmoveincancellation",
    name: "Handle Tenant Move In Reversal",
    description:
      "This package contains the required artifacts that automatically cancels the service order of tenant and reverses the move-out document of the owner when tenant move-in document is reversed.",
  },
  {
    id: "com.sap.content.ownermoveout.automateownermoveoutwithserviceorderupdate",
    name: "Handle Tenant Move In Date Changes",
    description:
      "This package contains the required artifacts that automatically updates the Owner Move-Out date and the start date of Service Order when Tenant changes the Move-In date.",
  },
  {
    id: "com.sap.content.fixedassetacquisition",
    name: "Fixed Asset Acquisition Approval",
    description: "Approval for fixed asset acquisition",
  },
  {
    id: "documentcentricapprovalprocess",
    name: "Document Centric Approval Process",
    description:
      "Automate document approvals by adding multiple approval steps, invite business users as approvers or reviewers.",
  },
  {
    id: "com.sap.content.managedeenergization",
    name: "Disconnection Process",
    description:
      "Automate and Manage Approvals for disconnection document, disconnection order creation and meter reading update for disconnection process in SAP S/4HANA using SAP BTP",
  },
  {
    id: "com.sap.content.custcontrchng",
    name: "Customer Contract Change",
    description:
      "Enables change of Customer Contract related to an Issue in SAP S4HANA Cloud for Projects, Project Collaboration with configurable approval and automatic update of Customer Contract in the SAP S4HANA Cloud system.",
  },
  {
    id: "sap.sf.workforce.integration.crosssystemworkflow",
    name: "Cross System Workflow for SAP SuccessFactors Solutions",
    description:
      "This content package enables SAP core hybrid customers to streamline HR business processes that run across SAP SuccessFactors Employee Central and SAP ERP HCM, using the capabilities of SAP Build Process Automation.",
  },
  {
    id: "com.sap.content.createscc.createsocialsecuritycertificate",
    name: "Create Social Security Certificate",
    description:
      "Create social security certificates request for traveling to countries for which such agreements exist.",
  },
  {
    id: "com.sap.content.overtimesplit",
    name: "Automatic Overtime Split",
    description:
      "Calculate overtime categories for service order and service confirmations based on predefined rules and request approval for them",
  },
  {
    id: "com.sap.content.aribapurchaserequisitionapproval",
    name: "Ariba Purchase Requisitions Approval",
    description:
      "Automate the approval of Purchase Requisitions from SAP Ariba, at Header level by considering all line items using SAP Workflow Management or SAP Build Process Automation.",
  },
  {
    id: "857dd32610374fb19004b7fc3d4d915e",
    name: "SHA-Pckg-Solu-Hotfix10.7",
    description:
      "Use the active voice for the headline and focus on the business value. Avoid overly",
  },
  {
    id: "32567522b1214f7aa845a4f3b5250c3a",
    name: "SHA-E2E-Pkg-Chk-13dec2",
    description:
      "Use the active voice for the headline and focus on the business value.",
  },
  {
    id: "c394e1a356974ba588c01a5d10fc4d53",
    name: "Demo Solution",
    description: "I am tying the headline",
  },
  {
    id: "3c83059a0d684150bb4ef39fe2f47268",
    name: "Kr-solupdate - chek official product name that your customers will recognize and avoid abbreviations unless they are",
    description:
      "https://www.youtube.com/watch?v=e1BoHiganzs&list=PL2WDjIcuV0bfzYkLyR",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.process001",
    name: "Process 123456789 123456789 123456789 123456789 123456789 123456789 123456789",
    description: "Process",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.routetrainoperations",
    name: "Route Train Operations 1234567890 1234567890 1234567890 1234567890 1234567890",
    description: "Route Train Operations",
  },
  {
    id: "9e35298e4a5d48dcb2741a0e6ab2a746",
    name: "Yogesh created solution to delist",
    description: "Improve your margins in real-time - changed - changed",
  },
  {
    id: "d05976f09f224c7ab8ccb47f6511bb77",
    name: "Yogesh created solution.",
    description: "Improve your margins in real-timedcsxsdcs",
  },
  {
    id: "e872c73a5d574df89431a01cb7e3f4c2",
    name: "KR pt4 changing the name now",
    description: "https://dcp-portal-ui.d2.services.store.net.sap/solution-hub",
  },
  {
    id: "66aef9feb38b4e039f76178559a738df",
    name: "KR CB05",
    description:
      "https://jira.tools.sap/browse/MPPORTAL-5233https://jira.tools.sap/browse/MPPORTAL-5233",
  },
  {
    id: "f3c931492ee5428d9ad0f490967d0fb8",
    name: "Kr cb02",
    description: "https://jira.tools.sap/browse/MPPORTAL-5216",
  },
  {
    id: "3af987e20eeb43b69339cb2bec44a8bf",
    name: "SM-10Jul24-0844 - IS Solution - Bettter name",
    description: "Improve your margins in real-time Dynamically",
  },
  {
    id: "33588fe374c942b7bcb0690ea465add6",
    name: "SS-demo-architecure-diagram",
    description: "Improve your margins in real-time newly updated by partner",
  },
  {
    id: "c5457c61ee4240dfb82a2acb8f24fb25",
    name: "KR-pt2",
    description: "4671439",
  },
  {
    id: "9251cf1d70164f2dbde2c22a2b506306",
    name: "SHA-EMS-E2E-Package-Solution",
    description:
      "Use the active voice for the headline and focus on the business value",
  },
  {
    id: "451d572207a543519e5f9f9e981d7b2b",
    name: "KR-t3ST",
    description: "https://solution-hub-wfm-qa.cfapps.eu12.hana.ondemand.com/",
  },
  {
    id: "9ae5e8f7a10c4fa1b24983f4310be6ad",
    name: "New SOlution",
    description: "Improve your margins in real-tim.",
  },
  {
    id: "ed69af23-172d-4019-97ae-c85655dd0890",
    name: "Smoke W7 create purchase order",
    description: "This package is to be added as a dependency",
  },
  {
    id: "4dfd43d3534b4bd3ba573fd28837cc2e",
    name: "Bot for Job Scheduling",
    description:
      "Verifies job completion and generates excel reports using SM36 and SM37 transaction codes",
  },
  {
    id: "a362657f2669485692f656bc0c4c0db2",
    name: "Bot for Creation of Planned Order",
    description:
      "Creation of planned order using business application programming interface",
  },
  {
    id: "cb0d61c388ba4467b9bc2a2420c76584",
    name: "Bot for Creation of Production Order",
    description:
      "Create production order in SAP systems using Business Application Programming Interface",
  },
  {
    id: "d4795b1155f34cb38a37cc706cfe3114",
    name: "Bot for Release of Production Order",
    description:
      "Release production order in SAP ECC via Business Application Programming Interface (BAPI)",
  },
  {
    id: "eu10-canary.lcnc-demo.actiontemplateonly",
    name: "Action template only",
    description: "Action template only summary",
  },
  {
    id: "eu10.store-content-dev.processactions",
    name: "Process Actions dev",
    description:
      "Actions to manage workflow or process in SAP Build Process Automation",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.storesubmissiontest",
    name: "2402a Actions project store submission",
    description: "2402a Actions project store submission",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.salesorderest2",
    name: "sales oreder",
    description: "sales oreder",
  },
  {
    id: "b2071bd76ba74682bf9250034714b389",
    name: "SmartBiz Bots - Utilities - FP04 - Write Off Process",
    description: "Wipro's SmartBiz Bot for Write Off Process (Utilities)",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.extendedrpawithdependencyautomationexecution",
    name: "Extended RPA With Dependency (Automation Execution)",
    description: "Extended RPA With Dependency (Automation Execution) summary",
  },
  {
    id: "eu10-canary.content.samplesalesordermanagement",
    name: "BPI-1817 Sales Order Approvals - Sample",
    description: "BPI-1817 Sales Order Approvals - Sample",
  },
  {
    id: "eu10.storecontentsubmission.salesorder",
    name: "BPI-1817 Sales Order",
    description: "BPI-1817 Sales Order",
  },
  {
    id: "eu10.storecontentsubmission.getcustomerdetails",
    name: "BPI-1817 Get Customer Details",
    description: "BPI-1817 Get Customer Details",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.extendedrpawithoutdependencyautomationexecution",
    name: "Extended RPA Without Dependency (Automation Execution)",
    description: "DON'T ADD AS DEPENDENCY",
  },
  {
    id: "eu10-canary.bpi-tools-dev-consumer-eu.helloworld5",
    name: "Hello world",
    description: "This is a sample",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.actionasadependency",
    name: "Action as a Dependency",
    description: "Action as a Dependency summary",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.supplierinvoiceswithdocumentinformationextraction3",
    name: "Supplier Invoices with Document Information Extraction",
    description:
      "Supplier Invoices with Document Information Extraction summary",
  },
  {
    id: "eu10-canary.bpi-tools-dev-consumer-eu.extendedrpawithdependencyforautomationexecutiononly",
    name: "Extended RPA With Dependency for Automation Execution only",
    description:
      "Extended RPA With Dependency for Automation Execution only (dont add as dependency)",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.extendedrpawithoutdependencyforautomationexecutiononly",
    name: "Extended RPA Without Dependency for Automation Execution only",
    description:
      "Extended RPA Without Dependency for Automation Execution only (dont add as dependency)",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.calm",
    name: "CALM API",
    description: "CALM API",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.acdc",
    name: "AC DC",
    description: "AC DC",
  },
  {
    id: "eu10-canary.lcnc-demo.spawithactionsdependencies",
    name: "SPA with Actions Dependencies",
    description: "SPA with Actions Dependencies",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.actionspackagegetcostcenter",
    name: "Actions Package - Get Cost Center",
    description: "Actions Package - Get Cost Center",
  },
  {
    id: "eu10-canary.lcnc-demo.actionpackageforkt",
    name: "Action Package For KT",
    description: "Action Package For KT Sample Summary",
  },
  {
    id: "eu10-canary.bpi-tools-dev-consumer-eu.xiaohuistore",
    name: "Xiaohui Store (submission)",
    description: "Xiaohui Store (summary)",
  },
  {
    id: "eu10-canary.bpi-tools-dev-consumer-eu.checkactionswithsegmentedctions",
    name: "Check Action package with segmented actions",
    description: "Check Action package with segmented actions",
  },
  {
    id: "eu10-canary.irpa-artifactory-store.algprojectforsaveaswdecision",
    name: "ALGPackageTemplateWithDecision",
    description: "ALG PackageTemplateWithDecision",
  },
  {
    id: "eu10-canary.bpi-tools-dev-consumer-eu.actionprojectcrud",
    name: "ActionProjectCRUD",
    description: "publication to store",
  },
  {
    id: "eu10.storecontentsubmission.invoiceapprovalprocesssample",
    name: "Invoice Approval Process",
    description:
      "This sample content is designed to help users to get started in automating invoice approvals. It is based on one of our Tutorials for SAP Process Automation.",
  },
  {
    id: "eu10-canary.content.changerequestprocess",
    name: "Change and Innovation Approval Process",
    description:
      "This sample content helps users to get started in streamlining and digitalizing a process for requesting and approving innovations and changes to existing solutions to speed up the process and increase transparency.",
  },
  {
    id: "eu10-canary.bpi-tools-dev-consumer-eu.testactiontags",
    name: "AxM AP Tags",
    description: "AxM AP Tags",
  },
  {
    id: "eu10-canary.irpa-artifactory-store.demoimportexportwithdecision",
    name: "Demo import/export with decision",
    description: "Demo import/export with decision",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.consumptionofactionproject4",
    name: "Consumption of action projects as a dependency4",
    description: "Consumption of action projects as a dependency",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.consumptionofactionproject3",
    name: "Consumption of action projects as a dependency3",
    description: "SPA project dependent on Rpa project and action project",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.consumptionofactionproject2",
    name: "Consumption of action projects as a dependency2",
    description: "SPA project dependent on SPA project and action project",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.consumptionofactionproject1",
    name: "Consumption of action projects as a dependency1",
    description: "SPA project dependent on action project/s",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.spawithactiondependency",
    name: "SPA with action dependency",
    description: "SPA project with action package as dependency",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.actiondependentpackage",
    name: "Action dependent package",
    description: "dependent package summary",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.standaloneactionproject",
    name: "Standalone Action Project",
    description:
      "Standalone Action Project created from spa-registry-dev / submission summary",
  },
  {
    id: "ecbda22c-17bb-42f1-8836-94715b2a52a3",
    name: "Validate SAPMLIPA-31521 - Store Replication",
    description: "Validate SAPMLIPA-31521 - Store Replication",
  },
  {
    id: "eu10-canary.lcnc-demo.templateonlysubmission",
    name: "Template Only Submit",
    description: "Template Only Submit",
  },
  {
    id: "eu10-canary.lcnc-demo.templatelcnc",
    name: "Template Only LCNC",
    description: "Template Only LCNC",
  },
  {
    id: "eu10-canary.bpi-tools-dev-consumer-eu.e2e6",
    name: "Blabla sub",
    description: "Blabla sub",
  },
  {
    id: "5f1bf9f9-d2c7-4667-8505-8211530f4cfa",
    name: "Smoke W7 create purchase order",
    description: "Smoke W7 create purchase order",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.extrpawithdependency1935",
    name: "Ext RPA With Dependency 1935",
    description: "Ext RPA With Dependency 1935",
  },
  {
    id: "cce565c9-c4a7-47e2-bd79-3f1ba3525ab3",
    name: "ReusablePackageAsProject",
    description: "ReusablePackageAsProject",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.testextrpaforspecialchar5",
    name: '!@#$%^&*(*)_+~:"|}{|?/\\<>,.;',
    description: '!@#$%^&*(*)_+~:"|}{|?/\\<>,.;',
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.extendedtemplaterpawithoutdependencyforautomationexc2",
    name: "Extended Template RPA Without Dependency for Automation Exc",
    description: "For Automation Job",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.extrpawithalltags",
    name: "Ext RPA with all tags",
    description: "Ext RPA with all tags",
  },
  {
    id: "17b29c1b-5209-45fc-b7af-5830d902533d",
    name: "SAPMLIPA-26723",
    description: "SAPMLIPA-26723 - package with open submissions",
  },
  {
    id: "62a85fbe-dbbd-4cd8-835d-ae96b1c0476a",
    name: "SAPMLIPA-26723",
    description: "SAPMLIPA-26723 - package without open submissions",
  },
  {
    id: "eu10-canary.lcnc-demo.spa14955832601260",
    name: "SPA14955832601260",
    description: "Package submitted by Automation Execution",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.lcnctemplatewithnodep",
    name: "LCNCTemplateWithNoDep",
    description: "Lcnc template with no dependency",
  },
  {
    id: "eu10-canary.lcnc-demo.processlcnc",
    name: "LCNC with Dependency for Import",
    description: "LCNC with Dependency for Import",
  },
  {
    id: "eu10-canary.bpi-tools-dev-consumer-eu.extendedirpawithdependencies",
    name: "Extended IRPA with dependencies",
    description: "Extended IRPA with dependencies",
  },
  {
    id: "eu10-canary.bpi-tools-dev-consumer-eu.extendedirpadependentpackage",
    name: "Extended IRPA dependent package",
    description: "dependency to Extended IRPA package",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.demolcncwithdep",
    name: "Demo Lcnc with dep",
    description: "dummy project for lcnc",
  },
  {
    id: "eu10-canary.lcnc-demo.spa8122029807743",
    name: "LCNC With Dependency for bug 1801",
    description: "1801",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.lcncwithalreadyimporteddependency",
    name: "Lcnc with already imported dependency",
    description: "package with already imported dependency of IRPA source type",
  },
  {
    id: "eu10-canary.bpi-tools-dev-consumer-eu.lcncwithdep",
    name: "Lcnc with dep2",
    description: "Lcnc with dep",
  },
  {
    id: "eu10-canary.bpi-tools-dev-consumer-eu.lcncwithdependency",
    name: "Lcnc with images",
    description: "Lcnc with images",
  },
  {
    id: "eu10-canary.spa-registry-dev-consumer-eu.testlcncwithdependency",
    name: "TemplateLCNCWithDep",
    description: "LCNC Template",
  },
  {
    id: "eu10-canary.bpi-tools-dev-consumer-eu.metallica",
    name: "Metallica",
    description: "Contains Master of puppets",
  },
  {
    id: "eu10-canary.bpi-tools-dev-consumer-eu.aworldofdatatypes",
    name: "A world of Data Types",
    description: "A world of Data Types",
  },
  {
    id: "29b86a44-f701-4230-b1d3-ecc2508f0533",
    name: "Open SAP MS Office",
    description: "Demo on store workflow",
  },
  {
    id: "051f1a53-2159-4ab7-9482-2819f50a902e",
    name: "benoit's package",
    description: "benoit's package",
  },
  {
    id: "6263c55e-9f0c-45dc-ba02-c13ef5993208",
    name: "00D - Yet another E2E process for unleashing the value of automations",
    description: "work work",
  },
  {
    id: "098663ab-469c-4e46-884a-d618e14500ca",
    name: "00C - Readily built business content. Configure & run!",
    description: "Automates a process from beginning to end!",
  },
  {
    id: "16d5e626-43c3-49c7-86a1-4f7b73c4342d",
    name: "00B - Another editable learning package",
    description: "Non scholae, sed vitae discimus!",
  },
  {
    id: "b72d4fef-b795-466a-87a3-24e37edd7db3",
    name: "00A - An editable learning package",
    description: "Learn how to automate your business in 15 minutes",
  },
  {
    id: "af8762a8-b270-46d0-97b3-3b07b9902c58",
    name: "Store Fork Me",
    description: "A forkable package",
  },
  {
    id: "c8e16b5b-f32e-4b5d-9c74-0d58e66c60a5",
    name: "Sign-off - SAPMLIPA-22615 - Warn Users Of Deactivated Artifacts",
    description: "Warn Users Of Deactivated Artifacts",
  },
  {
    id: "1340d074-2cb0-460f-90da-854c830b6b73",
    name: "MkProject",
    description: "MkProject",
  },
  {
    id: "f3917f5f-c03d-429f-8f01-b4243b199cd9",
    name: "StorePrepareHtml",
    description: '<script>alert("summary")</script>',
  },
  {
    id: "7ae045e8-4ed1-4345-b578-dcc38cce249f",
    name: "Forkable Package",
    description: "Forkable Package",
  },
];

const projTypes = [
  {
    id: "sap-business-process",
    name: "SAP Business Process",
    description:
      "With SAP Build Process Automation, you can visually create a business process version using a combination of artifacts (such as forms and decisions) and process controls (such as branches, conditions, and mail notifications).",
  },
  {
    id: "sap-build-automation",
    name: "SAP Build Automation",
    description:
      "Automate repetitive tasks across applications. Used for extracting data from documents, mass updates of data, and local file management. SAP Build Process Automation offers an editor and a recorder to create automations.",
  },
  {
    id: "sap-build-applications",
    name: "SAP Build Applications",
    description:
      "You can develop various applications, including full-stack, frontend, backend, and mobile options, to meet your specific needs. SAP Build offers a range of categories for application development, each designed to address distinct requirements and environments. The selected category significantly impacts the development approach and the tools available.",
  },
  {
    id: "sap-build-fullstack",
    name: "Full-Stack Applications",
    description:
      "Enables you to develop, extend, and deploy comprehensive applications that work seamlessly across both mobile devices and desktops. Full-stack development encompasses both the front end (the part you interact with) and the back end (the server-side processes), allowing you to create dynamic and responsive applications with a wide range of functionalities.",
  },
  {
    id: "sap-build-frontend",
    name: "Frontend Applications",
    description:
      "Enables you to create engaging, interactive user interfaces for web applications. This involves crafting designs that deliver a smooth user experience, focusing on layout, visuals, and user interactions. Technologies such as SAPUI5 and SAP Fiori are essential for constructing these visually appealing interfaces.",
  },
  {
    id: "sap-build-mobile",
    name: "Mobile Applications",
    description:
      "Enables you to develop platform-agnostic, metadata-based applications that can be developed once and deployed across multiple platforms simultaneously. You can develop native or hybrid apps that leverage device features and cater to the increasing demand for mobile-friendly experiences.",
  },
];

const knowledgeBase = [
  {
    question: "Queries regarding the events",
    answer:
      "Kindly create a query on forums on Scholar@SAP Onboarding Portal and the Onboarding team will get back to you.",
  },
  {
    question: "How to provide feedback of the event",
    answer:
      "Kindly post it on portal or write to us at scholar_onboarding@sap.com",
  },
  {
    question:
      "Can we get suggestions from our seniors that which PGs are good near the office/list of PG’s?",
    answer:
      "You can reach out to your buddies to get help with finding accomodation.",
  },
  {
    question: "Will the accommodation be provided by SAP for the initial days?",
    answer:
      "SAP will not be providing any accomodation. You will have to make your own arrangements from Day 1.",
  },
  {
    question: "What to prepare for day one?",
    answer:
      "We will provide you with a list of what you need for your first day a few days before joining.",
  },
  {
    question: "Will travel expenses be reimbursed by SAP?",
    answer: "No, SAP will not bear any expenses.",
  },
  {
    question: "What is the dress code? Can we wear casual clothes?",
    answer:
      "SAP doesn't have a dress code as such. But Business Casuals are fine.",
  },
  {
    question: "Which technologies will be allocated after joining?",
    answer: "You will be briefed about this during onboarding.",
  },
  {
    question: "What is Employee consent form?",
    answer: "The Employee Consent form is not applicable for Scholars.",
  },
  {
    question: "Queries regarding documents",
    answer:
      "Please post the query on the portal and we will try our best to assist you.",
  },
  {
    question: "Queries regarding Shuttle service",
    answer:
      "SAP shuttle services will be provided the evening of Day 1 onwards.",
  },
  {
    question:
      "Will my accomodation and travel expenses for the zeroth day be reimbursed?",
    answer:
      "No, SAP will not bear any expenses for your accomodation and travel.",
  },
  {
    question: "Is it mandatory to attend the event?",
    answer: "No, it is not mandatory.",
  },
  {
    question: "What is a Buddy?",
    answer:
      "Buddies are your seniors assigned to you with whom you can discuss your problems and ask for help whenever required.",
  },
  {
    question: "When will we be assigned to a team?",
    answer:
      "Post onboarding, you will go through trainings, after which you'll be getting into your Project Teams.",
  },
  {
    question: "How will we get into our project teams?",
    answer:
      "You will be intimated about this during the first week of your onboarding.",
  },
  {
    question: "Can our parents accompany us on Zeroth Day?",
    answer:
      "We only allow family visit on Weekends, after you join SAP. Family will not be allowed to accompany you on Zeroth Day.",
  },
  {
    question:
      "After we join, will there be any training or we will start working on projects?",
    answer:
      "Trainings on different technologies will be conducted for the first month of joining.",
  },
  {
    question: "Will a team be allocated to us or can we choose it?",
    answer:
      "Once your training is completed, you will be given an opportunity to choose and work in a team based on your interest.",
  },
  {
    question: "What are the conditions and procedures for Incorporation?",
    answer: "This will be shared post joining.",
  },
  {
    question: "What is the current leave policy for Scholars?",
    answer: "This will be shared post joining.",
  },
  {
    question: "Course recommended for practice before joining?",
    answer:
      "Please check the 'Courses' tab on the onboarding portal for some recommended courses.",
  },
  {
    question: "What are the general office timings?",
    answer: "Depends on your Team and their working culture.",
  },
  {
    question: "How do I reach out incase of any Query?",
    answer:
      "Kindly create a query on forums on Scholar@SAP Onboarding Portal and the Onboarding team will get back to you.",
  },
  {
    question: "Till when will we continue Work From Home?",
    answer:
      "As on now, we have Work From Home until the 31st of December, however it may be extended depending on the situation of Covid then.",
  },
  {
    question: "How can I open salary account?",
    answer: "This will be taken care by SAP once you are onboarded",
  },
  {
    question: "What is India PR and UAN Number?",
    answer:
      "If you are not an Indian citizen, kindly reach out to us via email for more information.",
  },
  {
    question: "Who do we contact incase of issues with the Portal?",
    answer:
      "You can either create a query in the Forums Section or leave an email on scholar_onboarding@sap.com",
  },
  {
    question: "What if my family is sick and I need to take care of them?",
    answer: "You can inform your Vocational Trainer and avail Leave.",
  },
  {
    question: "Will we be reimbursed broadband charges?",
    answer: "Yes, as per current company's policy.",
  },
  {
    question: "When will we be receiving our laptop?",
    answer: "You will be mostly receiving your laptops prior your onboarding",
  },
  {
    question: "What if we don’t get our laptop on time?",
    answer: "Our IT Team will assist you to configure your personal laptop.",
  },
  {
    question: "I have changed my address",
    answer:
      "Please write an email to the onboarding team with your current Address",
  },
  {
    question: "Queries regarding not getting offer letters",
    answer:
      "Please write to the VT / TA Spoc at the earliest if you have not received your offer letters.",
  },
  {
    question:
      "I was not able to answer the call from the onboarding team. Do I have to confirm my availability?",
    answer:
      "Make sure you provide responses to the forms shared on the Onboarding portal. Kindly provide us with a phone number through which we can keep in touch with you.",
  },
  {
    question: "Will our Onboarding be Virtual?",
    answer: "Yes.",
  },
  {
    question: "What is our Joining Date?",
    answer: "2nd August, 2021.",
  },
  {
    question: "What do I do if I fall sick during Onboarding and Training?",
    answer: "You can get in touch with your Vocational Trainer and avail Leave",
  },
  {
    question: "Exams during Onboarding",
    answer: "You can inform your Vocational Trainer and avail Leave.",
  },
  {
    question:
      "Do we need to sign any agreement before we join the Scholar Program?",
    answer: "We do not have any such bonds in SAP.",
  },
  {
    question: "Do we have to get a NOC from our college?",
    answer:
      "Yes, you need a No-objection certificate from your college on the day of joining.",
  },
  {
    question: "How will my Classes and Exams take place?",
    answer:
      "Both classes and exams shall be conducted online, more details shall be shared post onboarding.",
  },
  {
    question:
      "I don’t have my degree certificate yet. Will provisional certificate be enough?",
    answer: "Yes",
  },
  {
    question: "I don’t have my PAN Card with me. Is it necessary for joining?",
    answer: "Yes, your PAN card is mandatory for bank account creation.",
  },
  {
    question: "What will be the timings for the BITS classes on Saturdays?",
    answer: "BITS classes will be held from 9.00 am to 6.00 pm",
  },
  {
    question:
      "When will the exams be conducted? Will it be during office hours/weekdays?",
    answer:
      "All the BITS classes and examinations will be held on the weekends and will not interfere with your office hours.",
  },
  {
    question: "Will we be getting any holidays for studying for the exams?",
    answer: "Yes, you will be getting Leaves.",
  },
  {
    question:
      "I am yet to receive my final semester mark sheet. Can I upload the marksheets until the previous semester?",
    answer:
      "Yes, you can submit the final marksheet according to the deadline provided to you later.",
  },
];

import "dotenv/config";
import {
  AzureOpenAiChatClient,
  AzureOpenAiEmbeddingClient,
} from "@sap-ai-sdk/foundation-models";

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// import data from "../filteredData.json" assert { type: "json" };

const { json } = bodyParser;
const app = express();
app.use(cors());
app.use(json());
const port = process.env.PORT || 3002;

let embeddedDocs = [];
let projEmbedeedDocs = [];
let embeddedFaqs = [];
let embeddingClient = new AzureOpenAiEmbeddingClient({
  modelName: "text-embedding-3-small",
  deploymentId: "d95b690b7dee36bb",
  resourceGroup: "default",
});

// df5b959a660116b2: depId for gpt-4o
// d95b690b7dee36bb: depId for embedding

const client = new AzureOpenAiChatClient({
  modelName: "gpt-4o",
  // modelVersion: '2024-08-06', // optional
  // resourceGroup: "default",
  deploymentId: "df5b959a660116b2",
});

const PROJ_TYPES = Object.freeze([
  "sap-build-mobile",
  "sap-build-frontend",
  "sap-build-fullstack",
  "sap-build-applications",
  "sap-build-automation",
  "sap-business-process",
]);

let logsArray = [];

//   const response = await client.run({
//     messages: [
//       {
//         role: "user",
//         content: "Where is the deepest place on earth located?",
//       },
//     ],
//   });

// Initialize the client
async function init() {
  const faqStrings = knowledgeBase.map((item) => item.question);

  const faqEmbeddingParams = {
    input: faqStrings,
    user: "faq-user",
  };

  const faqResponseVek = (
    await embeddingClient.run(faqEmbeddingParams)
  ).getEmbeddings();

  embeddedFaqs = faqResponseVek.map((vector, i) => ({
    ...knowledgeBase[i],
    vector,
  }));

  const inputStrings = data.map((item) => `${item.name}: ${item.description}`);

  const projectStrings = projTypes.map(
    (item) => `${item.name}: ${item.description}`
  );

  const embeddingParameters = {
    input: inputStrings, // Pass the array of strings as the `input`
    user: "pseudo-user-id", // Optional: Add a pseudo-anonymized user ID
  };

  const projectEmbeddingParameters = {
    input: projectStrings, // Pass the array of strings as the `input`
    user: "projectType", // Optional: Add a pseudo-anonymized user ID
  };

  try {
    console.log("Embedding started!!!!");

    // Call the embedding model
    const responseVek = (
      await embeddingClient.run(embeddingParameters)
    ).getEmbeddings();

    const projectResponseVek = (
      await embeddingClient.run(projectEmbeddingParameters)
    ).getEmbeddings();

    const sdkEmbeddings = responseVek.map((vector, i) => ({
      ...data[i],
      vector,
      source: "sdk package", // optional: helps track where the entry came from
    }));

    const projectEmbeddings = projectResponseVek.map((vector, i) => ({
      ...projTypes[i],
      vector,
      source: "project type", // optional: helps track where the entry came from
    }));

    embeddedDocs = [...sdkEmbeddings];
    projEmbedeedDocs = [...projectEmbeddings];

    // Log the response
    // console.log(sdkEmbeddings);
    console.log("****************************************************");

    console.log("Embedding Done!!!!");
  } catch (error) {
    console.error("Error:", error);
  }
}

const cosineSimilarity = (a, b) => {
  //   console.log("Cosine Similarity", a, b);

  const dot = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
  const normA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
  const normB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));

  // console.log("Dot product:", dot);
  // console.log("NormA:", normA, "NormB:", normB);

  if (normA === 0 || normB === 0) {
    console.warn(
      "One of the vectors has zero magnitude. Returning 0 similarity."
    );
    return 0; // Return 0 similarity if one of the vectors is zero
  }

  return dot / (normA * normB);
};

function euclideanDistance(a, b) {
  if (a.length !== b.length) {
    throw new Error("Vectors must be the same length");
  }

  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    const diff = a[i] - b[i];
    if (isNaN(diff)) {
      console.warn(`Invalid number at index ${i}: a=${a[i]}, b=${b[i]}`);
      continue; // or throw error
    }
    sum += diff * diff;
  }

  return Math.sqrt(sum);
}

function extractJsonFromLLMResponse(text) {
  if (text.match(/^\[/)) {
    text = JSON.parse(text);
    return text[0];
  }
  const match = text.match(/```json\s+([\s\S]*?)\s+```/);
  if (match && match[1]) {
    try {
      return JSON.parse(match[1]);
    } catch (e) {
      console.error("Invalid JSON returned from LLM:", e);
      return null;
    }
  }
  return null;
}

async function getFromLLM(input, packages) {
  const response = await client.run({
    messages: [
      {
        role: "system",
        content: `You are an expert assistant for SAP Build tools and SDK packages. You are given a list of the top 5 most relevant items, each being either an SDK package or a project type:\n${JSON.stringify(
          packages
        )}
          Your task is to:
          - Understand the user's natural language requirement.
          - Select the **single most appropriate** item from the list that best matches the user's intent.
    
          Response rules:
          - If a match is found, respond with **only** a JSON object containing these keys: "id", "name", and "description".
          - If **none** of the items are relevant, respond with a JSON with property "message": "No package or project type found".
          - Do **not** add any explanations, formatting, or text outside of the JSON or message above.
          - Focus on **meaning and intent**, not just keyword overlap.`,
      },
      {
        role: "user",
        content: `User query: "${input}"`,
      },
    ],
  });

  let jsonResponse = response.getContent();
  console.log("LLM Response:", jsonResponse);

  if (response.getContent().startsWith("```json")) {
    jsonResponse = extractJsonFromLLMResponse(jsonResponse);
  }
  console.log("Extracted JSON:", jsonResponse);
  console.log(typeof jsonResponse);

  try {
    return JSON.parse(jsonResponse);
  } catch (error) {
    return { message: "No package or project type found" };
  }
}

async function getProjFromLLM(input, packages) {
  const response = await client.run({
    messages: [
      {
        role: "system",
        content: `You are an expert assistant for SAP Build Projects. You are given a list of the top 5 most relevant items, each being a project type:\n${JSON.stringify(
          packages
        )}
          Your task is to:
          - Understand the user's natural language requirement.
          - Select the **multiple most appropriate** item from the list that best matches the user's intent.
    
          Response rules:
          - If match is found, respond with natural language text containing which projects to create in which order to achieve the user's intent.
          - If **none** of the items are relevant, respond with a JSON with property "message": "No project type found".
          - Do **not** add any explanations, formatting, or text outside of the JSON or message above.
          - Focus on **meaning and intent**, not just keyword overlap.
          - Respond with a JSON object containing these keys: "id", "name", and "description" for each project type.`,
      },
      {
        role: "user",
        content: `User query: "${input}"`,
      },
    ],
  });

  let jsonResponse = response.getContent();
  console.log("LLM Response:", jsonResponse);

  if (response.getContent().startsWith("```json")) {
    jsonResponse = extractJsonFromLLMResponse(jsonResponse);
  }
  console.log("Extracted JSON:", jsonResponse);

  return JSON.parse(jsonResponse);
}

app.post("/", async (req, res) => {
  if (embeddedDocs.length === 0) {
    return res.status(500).json({ error: "No embedded documents available" });
  }
  const { input } = req.body;
  if (!input) return res.status(400).json({ error: "Question required" });

  const inputObj = {
    input: input,
    user: "pseudo-user-id", // Optional: Add a pseudo-anonymized user ID
  };

  let queryEmbedding = await embeddingClient.run(inputObj);
  queryEmbedding = queryEmbedding.getEmbeddings()[0];

  // console.log("Query vector length:", queryEmbedding.length);
  // console.log("Document vector length:", embeddedDocs.length);

  const ranked = embeddedDocs
    .map((doc) =>
      // console.log(doc),
      ({
        doc,
        // score: cosineSimilarity(queryEmbedding, doc.vector),
        score: cosineSimilarity(queryEmbedding, doc.vector),
      })
    )
    .sort((a, b) => b.score - a.score);

  const topFive = ranked.slice(0, 5);

  console.log("Ranked:", topFive);

  const topCandidates = topFive.map((pak) => {
    return {
      id: pak.doc.id,
      name: pak.doc.name,
      description: pak.doc.description,
    };
  });

  console.log("Mapped Top Candidates", topCandidates);

  const best = await getFromLLM(input, topCandidates);
  console.log(best);

  logsArray.push({
    input: input,
    best: best,
    timestamp: new Date().toISOString(),
  });

  if (best.message === "No package or project type found") {
    return res.status(404).json(best);
  }

  //check if the id of the best is in PROJ_TYPES object
  if (PROJ_TYPES.includes(best.id)) {
    best.type = "project-type";
  } else {
    best.type = "sdk";
  }

  return res.json(best);
});

app.post("/proj_suggestion", async (req, res) => {
  const { input } = req.body;
  if (!input) return res.status(400).json({ error: "Question required" });

  const inputObj = {
    input: input,
    user: "pseudo-user-id", // Optional: Add a pseudo-anonymized user ID
  };

  let queryEmbedding = await embeddingClient.run(inputObj);
  console.log(queryEmbedding);

  queryEmbedding = queryEmbedding.getEmbeddings()[0];

  console.log(queryEmbedding);

  console.log("Query vector length:", queryEmbedding.length);
  console.log("Document vector length:", embeddedDocs.length);

  const ranked = projEmbedeedDocs
    .map((doc) => ({
      doc,
      score: cosineSimilarity(queryEmbedding, doc.vector),
    }))
    .sort((a, b) => b.score - a.score);

  const topFive = ranked.slice(0, 5);

  console.log("Ranked:", topFive);

  const topCandidates = topFive.map((pak) => {
    return {
      id: pak.doc.id,
      name: pak.doc.name,
      description: pak.doc.description,
    };
  });

  console.log("Mapped Top Candidates", topCandidates);

  const best = await getProjFromLLM(input, topCandidates);
  console.log(best);

  if (best.message === "No package or project type found") {
    return res.status(404).json(best);
  }

  logsArray.push({
    input: input,
    best: best,
    timestamp: new Date().toISOString(),
  });

  //check if the id of the best is in PROJ_TYPES object
  // if (PROJ_TYPES.includes(best.id)) {
  //   best.type = "project-type";
  // } else {
  //   best.type = "sdk";
  // }

  return res.json(best);
});

app.post("/checkreq", (req, res) => {
  console.log(req.body);

  logsArray.push({
    input: req.body,
    timestamp: new Date().toISOString(),
  });

  res.status(200).json({ message: "Request received" });
});

app.post("/faq", async (req, res) => {
  if (embeddedFaqs.length === 0) {
    return res.status(500).json({ error: "FAQ embeddings not ready" });
  }

  const { input } = req.body;
  if (!input) return res.status(400).json({ error: "Question required" });

  const inputObj = {
    input: input,
    user: "faq-user",
  };

  try {
    let queryEmbedding = await embeddingClient.run(inputObj);
    queryEmbedding = queryEmbedding.getEmbeddings()[0];

    const ranked = embeddedFaqs
      .map((doc) => ({
        doc,
        score: cosineSimilarity(queryEmbedding, doc.vector),
      }))
      .sort((a, b) => b.score - a.score);

    const top = ranked[0];
    if (top.score < 0.6) {
      return res
        .status(404)
        .json({ message: "Sorry, I couldn't find a matching answer." });
    }

    return res.json({
      id: top.doc.id,
      question: top.doc.question,
      answer: top.doc.answer,
      score: top.score,
    });
  } catch (e) {
    console.error("FAQ query failed", e);
    return res.status(500).json({ error: "Failed to process FAQ request" });
  }
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/logs", (req, res) => {
  res.status(200).json(logsArray);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  init();
});
