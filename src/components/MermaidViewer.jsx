import React from "react";
import {MermaidDiagram} from "@lightenna/react-mermaid-diagram";


function MermaidViewer() {
  const diagram_text= `
    flowchart LR
    %% Disease Scope Section
    subgraph DiseaseScope["1.Disease Scope"]
        GeneralCVD["General Cardiovascular Disease (CVD)"]
        SpecificDisease["Specific Diseases"]
        NoSpecificDisease["No Specific Disease"]
        SpecificDisease --> HF["Heart Failure"]
        SpecificDisease --> AF["Atrial Fibrillation"]
        SpecificDisease --> CM["Cardiomyopathies"]
        SpecificDisease --> MI["Myocardial Infarction"]
        SpecificDisease --> CAD["Coronary Artery Disease"]
        SpecificDisease --> SA["Subclinical Atherosclerosis"]
        SpecificDisease --> RHD["Rheumatic Heart Disease"]
    end
    
    %% Task Type Section
    subgraph TaskType["2.Task Type"]
        RiskPred["Risk Prediction"]
        Mortality["Mortality Prediction"]
        RiskStrat["Risk Stratification"]
        InHospMort["In-hospital Mortality"]
        
        HFDetection["Early Detection"]
        HFSubtype["Subtype Identification"]
        HFProg["Mortality Prediction"]
        HFFunc["Functional Status"]
        HFCaseFinding["Case Finding"]
        
        AFDetection["Early Screening"]
        AFRiskPred["Risk Prediction"]
        AFClassification["ECG Classification"]
        
        CMScreening["Early Screening"]
        
        MIMortality["Mortality Prediction"]
        
        CADDiagnosis["Disease Diagnosis"]
        CADDet["CAD Detection"]

        SADetection["Early Detection"]
        
        CDRiskPred["Cardiac Dysrhythmia Risk Prediction"]
        RHDDetection["RHD Detection"]
        
        GeneralCVD --> RiskPred
        GeneralCVD --> Mortality
        GeneralCVD --> RiskStrat
        
        NoSpecificDisease --> InHospMort
        
        HF --> HFDetection
        HF --> HFSubtype
        HF --> HFProg
        HF --> HFFunc
        HF --> HFCaseFinding
        
        AF --> AFDetection
        AF --> AFRiskPred
        AF --> AFClassification
        
        CM --> CMScreening
        
        MI --> MIMortality
        
        CAD --> CADDiagnosis
        CAD --> CADDet

        SA --> SADetection
        
        AF --> CDRiskPred
        RHD --> RHDDetection
    end
    
    %% Questions to Model Approach
    RiskPred --> Ensemble_RF
    RiskPred --> AutoML
    RiskPred --> LLM
    RiskPred --> XAI_Class
    RiskPred --> LGBM
    RiskPred --> DL_Retinal
    RiskPred --> CNNT
    Mortality --> CNNT
    Mortality --> TreeEnsemble
    RiskStrat --> DL_RetiCVD
    InHospMort --> LANISTR
    HFDetection --> CNN_ECG
    HFDetection --> GBM
    HFCaseFinding --> NLP_HF
    CDRiskPred --> ML_CD
    RHDDetection --> CNN_RHD
    HFSubtype --> KMedoids
    HFProg --> DL_EHR
    HFFunc --> BERT_NLP
    AFDetection --> ResNet_CNN
    AFRiskPred --> BiLSTM_ECG
    AFRiskPred --> ML_Class
    AFClassification --> CNN_Attention
    CMScreening --> CNN_US
    MIMortality --> Ensemble_Class
    CADDiagnosis --> XAI_Imaging
    CADDet --> DL_Facial
    SADetection --> EN_Regression
    
    %% Model Approach Section
    subgraph ModelApproach["3.Model"]
        Ensemble_RF["Ensemble Methods (RF, GBM, LGBM)"]
        AutoML["AutoML Framework"]
        LLM["Large Language Models (GPT-4)"]
        XAI_Class["XAI Classification"]
        LGBM["LightGBM"]
        CNNT["CNN"]
        TreeEnsemble["ML Models"]
        CNN_ECG["CNN for ECG Analysis"]
        GBM["XGBoost"]
        KMedoids["K-Medoids Clustering"]
        DL_EHR["LSTM"]
        BERT_NLP["BERT-based NLP"]
        ResNet_CNN["CNN"]
        BiLSTM_ECG["Bi-LSTM for ECG"]
        ML_Class["Statistical ML"]
        CNN_Attention["CNN with Attention"]
        CNN_US["CNN for Ultrasound"]
        Ensemble_Class["Ensemble Classifiers"]
        XAI_Imaging["XAI for Medical Imaging"]
        EN_Regression["Elastic Net Regression"]
        
        %% New models
        LANISTR["Multimodal Attention Fusion (LANISTR)"]
        DL_Facial["Deep Learning for Facial Analysis"]
        DL_Retinal["Deep CNN for Retinal Images"]
        DL_RetiCVD["Reti-CVD Framework"]
        NLP_HF["NLP for Clinical Notes"]
        ML_CD["Machine Learning for EHR"]
        CNN_RHD["CNN with Attention Mechanism"]
    end
    
    %% Model Development Section
    subgraph ModelDevelopment["4.Model Approach"]
        Ensemble_RF --> Ensemble_RF_Compare["Comparing Multiple Models"]
        AutoML --> AutoML_Novel["Novel Framework"]
        LLM --> LLM_Novel["Novel Application"]
        XAI_Class --> XAI_Class_Novel["Novel Framework"]
        LGBM --> LGBM_Novel["Novel Framework"]
        CNNT --> CNNT_Novel["Novel Framework"]
        TreeEnsemble --> TreeEnsemble_Compare["Comparing Multiple Models"]
        CNN_ECG --> CNN_ECG_Novel["Novel Architecture"]
        GBM --> GBM_Novel["Novel Application"]
        KMedoids --> KMedoids_Novel["Novel Approach"]
        DL_EHR --> DL_EHR_Novel["Novel Architecture"]
        BERT_NLP --> BERT_NLP_Novel["Novel Application"]
        ResNet_CNN --> ResNet_CNN_Novel["Novel Architecture"]
        BiLSTM_ECG --> BiLSTM_ECG_Novel["Novel Architecture"]
        ML_Class --> ML_Class_Compare["Comparing Multiple Models"]
        CNN_Attention --> CNN_Attention_Novel["Novel Architecture"]
        CNN_US --> CNN_US_Novel["Novel Architecture"]
        Ensemble_Class --> Ensemble_Class_Compare["Comparing Multiple Models"]
        XAI_Imaging --> XAI_Imaging_Novel["Novel Framework"]
        EN_Regression --> EN_Novel["Novel Application"]
        
        %% New model approaches
        LANISTR --> LANISTR_Novel["Novel Framework"]
        DL_Facial --> DL_Facial_Novel["Novel Approach"]
        DL_Retinal --> DL_Retinal_Novel["Novel Framework"]
        DL_RetiCVD --> DL_RetiCVD_Novel["Novel Approach"]
        NLP_HF --> NLP_HF_Novel["Novel Application"]
        ML_CD --> ML_CD_Novel["Novel Framework"]
        CNN_RHD --> CNN_RHD_Novel["Novel Architecture"]
    end
    
    %% Dataset Section
    subgraph DatasetSection["5.Dataset (Public/Private)"]
        Ensemble_RF_Compare --> UKBiobank1["UK Biobank (Public)"]
        Ensemble_RF_Compare --> CPRD1["CPRD (Public)"]
        Ensemble_RF_Compare --> RHS["Ragama Health Study (Private)"]
        
        AutoML_Novel --> UKBiobank2["UK Biobank (Public)"]
        
        LLM_Novel --> MIMIC["MIMIC-III & eICU & TREQS (Public)"]
        LLM_Novel --> UKBiobank3["UK Biobank & KoGES (Public)"]
        
        XAI_Class_Novel --> UCIHeart["UCI Heart Disease (Public)"]
        LGBM_Novel --> PAMF["PAMF (Private)"]
        CNNT_Novel --> BIDMC["BIDMC (Private)"]
        TreeEnsemble_Compare --> DukeEHR1["Duke Medical Center (Private)"]
        
        CNN_ECG_Novel --> Multi_ECG1["Yale New Haven Health System,<br>UK Biobank, ELSA-Brasil (Mixed)"]
        
        GBM_Novel --> MaineHIE["Maine HIE (Public)"]
        
        KMedoids_Novel --> Multi_EHR1["CPRD, THIN & UK Biobank (Mixed)"]
        
        DL_EHR_Novel --> BJH["Barnes-Jewish Hospital (Private)"]
        
        BERT_NLP_Novel --> YNHHS1["Yale New Haven Health (Private)"]
        
        ResNet_CNN_Novel --> MayoECG["Mayo Clinic ECG (Private)"]
        ResNet_CNN_Novel --> Lucile["Lucile Packard Children's<br>Hospital (Private)"]
        
        BiLSTM_ECG_Novel --> iRhythm["iRhythm Zio XT (Private)"]
        
        ML_Class_Compare --> WSIC["Whole Systems Integrated Care (Private)"]
        
        CNN_Attention_Novel --> MIT_PTB["MIT-BIH & PTB-XL (Public)"]
        
        CNN_US_Novel --> YNHHS_MSHS["Yale-New Haven & Mount Sinai (Private)"]
        CNN_US_Novel --> Stanford_Echo["Stanford Echocardiography (Public)"]
        
        Ensemble_Class_Compare --> Multi_Biomarker["Multi-center Biomarker (Private)"]
        
        XAI_Imaging_Novel --> Multi_Imaging["Multi-center Imaging (Private)"]

        EN_Novel --> PESA["Progression of Early Subclinical<br>Atherosclerosis (PESA) (Private)"]
        
        %% New datasets
        LANISTR_Novel --> MIMIC_IV_Multi["MIMIC-IV Multi-modal (Public)"]
        DL_Facial_Novel --> Chinese_Cohort["Chinese Angiography Cohort (Private)"]
        DL_Retinal_Novel --> Retinal_Multi["UK Biobank, SEED & AREDS (Mixed)"]
        DL_RetiCVD_Novel --> CMERC_HI["CMERC-HI Cohort (Private)"]
        NLP_HF_Novel --> Statewide_EMR["Statewide EMR (Private)"]
        ML_CD_Novel --> EHR_CD["Multi-hospital EHR (Private)"]
        CNN_RHD_Novel --> Echo_RHD["Echocardiogram Database (Private)"]
    end
    
    %% Data Type Section
    subgraph DataTypeSection["6.Data Type"]
        UKBiobank1 --> UKB1_CV["Clinical Variables"]
        CPRD1 --> CPRD1_CV["Clinical Variables"]
        RHS --> RHS_CV["Clinical Variables"]
        
        UKBiobank2 --> UKB2_CV["Clinical Variables"]
        MIMIC --> MIMIC_EHR["EHR Data"]
        UKBiobank3 --> UKB3_EHR["EHR Data"]
        UCIHeart --> UCI_Tab["Tabular Data"]
        PAMF --> PAMF_Tab["EMR Data"]
        BIDMC --> BIDMC_Tab["ECG Data"]
        DukeEHR1 --> Duke_Lab["Laboratory Data"]
        Multi_ECG1 --> MultiECG_ECG["ECG Data"]
        MaineHIE --> MaineHIE_HIE["HIE Data"]
        Multi_EHR1 --> MultiEHR_EHR["EHR Data"]
        BJH --> BJH_EHR["EHR Data"]
        YNHHS1 --> YNHHS_Text["EHR Data"]
        MayoECG --> MayoECG_ECG["ECG Data"]
        Lucile --> Lucile_SW["Smartwatch ECG Data"]
        iRhythm --> iRhythm_ECG["Single-lead ECG"]
        WSIC --> WSIC_EHR["Primary Care EHR"]
        MIT_PTB --> MIT_PTB_ECG["ECG Database"]
        YNHHS_MSHS --> YNHHS_MSHS_POCUS["POCUS Imaging"]
        Stanford_Echo --> Stanford_Echo_DT["Echo Video"]
        Multi_Biomarker --> MultiBio_Lab["Laboratory Data"]
        Multi_Imaging --> MultiImg_SPECT["SPECT Imaging"]
        PESA --> PESA_CV["Clinical Variables"]
        
        %% New data types
        MIMIC_IV_Multi --> MIMIC_IV_Multimodal["Clinical Time Series, Notes & X-ray"]
        Chinese_Cohort --> Chinese_Facial["Facial Photographs"]
        Retinal_Multi --> Retinal_Photos["Retinal Photographs"]
        CMERC_HI --> CMERC_Retinal["Retinal Images"]
        Statewide_EMR --> Statewide_NLP["Unstructured Clinical Notes"]
        EHR_CD --> EHR_CD_Structured["Structured EHR Data"]
        Echo_RHD --> Echo_RHD_Images["Mitral Valve Echocardiograms"]
    end
    
    %% Papers Section
    subgraph Papers["7.Published Research"]
        UKB1_CV --> You2023["<strong>You et al.(Stroke & Vascular Neurology, 2023)</strong><br>Light GBM for 10-yr CVD risk<br>645 candidate variables<br>LR, RF, NN, GBM, SVM compared<br>UK Biobank CVD Risk Prediction (UKCRP)<br>Model including 10 variables"]
        CPRD1_CV --> Weng2017["<strong>Weng et al.(PLoS ONE, 2017)</strong><br>NN for the first CVD event over 10-yr<br>8 core + 22 additional variables<br>RF, NN, GBM compared"]
        RHS_CV --> Mettananda2025["<strong>Mettananda et al.(BMJ Open., 2025)</strong><br>RF for 10-yr CV events risk prediction<br>Sri Lanka-specific population<br>Comparing models with 75 variables<br>External validation with CNTH dataset"]
        
        UKB2_CV --> Alaa2019["<strong>Alaa et al.(PLoS ONE, 2019)</strong><br>Automated ML (AutoPrognosis)<br>473 variables"]
        
        MIMIC_EHR --> Wu2024["<strong>Wu et al.(Proc Conf Empir Methods Nat Lang Process., 2024)</strong><br>EHRAgent: Generalizable LLM<br>agent for EHR reasoning<br>Few-shot complex reasoning<br>Require only small amount of dataset<br>The 'potential' risk prediction<br>tasks based on EHRs"]
        UKB3_EHR --> Han2024["<strong>Han et al.(iScience, 2024)</strong><br>GPT-4 for CVD risk prediction<br>MACE (Major Adverse Cardiovascular Events)<br>Cross-ethnic validation"]
        
        UCI_Tab --> Guleria2022["<strong>Guleria et al.(Electornics, 2022)</strong><br>XAI-driven SVM, LR, and Naive Bayes<br>Models for CVD classification<br>Feature importance analysis"]
        UCI_Tab --> Arzanipour2024["<strong>Arzanipour (2024)</strong><br>Feature importance & causal inference<br>Identifies top 5 features via multiple methods<br>G-computation for causal relationships<br>Heart Disease Prediction dataset"]
        
        PAMF_Tab --> Ward2020["<strong>Ward et al.(NPJ Digit Med., 2020)</strong><br>ASCVD Rick Prediction<br>Compared with ASCVD Risk Estimator<br>Includes 473 predictors"]
        BIDMC_Tab --> Sau2024["<strong>Sau et al.(The Lancet Digital Health, 2024)</strong><br>Risk of all-cause mortality<br>future ventricular arrhythmia, future atherosclerotic cardiovascular disease,<br>and future heart failure"]
        Duke_Lab --> Goldstein2016["<strong>Goldstein et al.(European Heart Journal, 2017)</strong><br>ML for post-AMI mortality<br>Compares Regression-based ML,<br>Tree-based ML, and NN models"]
        
        MultiECG_ECG --> Dhingra2025["<strong>Dhingra et al.(European Heart Journal, 2025)</strong><br>Heart failure hospitalization<br>stratification with 12-lead ECG images<br>Detected signs of LVSD<br>Compared with the PCP-HF model<br>Proposed a non-invasive Approach<br>Unlike blood biomarkers or structured clinical data<br>Multinational validation"]

        MaineHIE_HIE --> Duong2021["<strong>Duong et al.(PLoS One., 2021)</strong><br>ML for new onset HF risk<br>Non-invasive prediction using EMR data<br>First HF prediction model based on HIE data<br>Dimensionality reduction using ICD-10 Subheaders"]
        
        MultiEHR_EHR --> Banerjee2023["<strong>Banerjee et al.(Lancet, 2023)</strong><br>HF subtypes via ML clustering<br>Compares KNN, Hierarchical, K-Medoids, Mixture-model clustering<br>Select k-medoids algorithm<br>645 -> 87 Features<br>Added Genetic Validation"]
        
        BJH_EHR --> McGilvray2022["<strong>McGilvray et al.(JACC Heart Fail., 2022)</strong><br>Decompensation or mortality prediction<br>3 LSTM layers for temporal analysis of vital signs and lab data<br>1 Dense layer for static patient characteristics<br>Sigmoid activation function to predict severe decompensation within one year<br>Outperforms Ejection Fraction (EF) in predictive performance"]
        
        YNHHS_Text --> Adejumo2024["<strong>Adejumo et al.(JAMA Netw Open, 2024)</strong><br>A model extracting symptom and<br>activity-related information based on NYHA functional classification<br>Handles unstructured data better than traditional SVM- and RF-based n-gram models<br>Classifies HF symptoms during activity or rest<br>Uses SHAP for interpretability"]
        
        MayoECG_ECG --> Attia2021["<strong>Attia et al.(The Lancet, 2021)</strong><br>Identifies AF patients in Normal Sinus Rhythm (NSR)<br>Uses 8 independent leads (I, II, V1-V6) from 10-second 12-lead ECG"]
        MayoECG_ECG --> Rabinstein2021["<strong>Rabinstein et al.(Journal of Stroke and Cerebrovascular Diseases, 2021)</strong><br>Undiagnosed AF in patients with Embolic Stroke of Unknown Source (ESUS)<br>Compares AI-ECG scores with long-term rhythm monitoring outcomes<br>A potential screening tool for prolonged heart monitoring"]
        MayoECG_ECG --> Jo2021["<strong>Jo et al.(International Journal of Cardiology, 2021)</strong><br>XAI for AF detection with ECG<br>Explainable model"]
        
        Lucile_SW --> Zahedivashi2023["<strong>Zahedivashi et al.(Communications Medicine, 2023)</strong><br>Utility of smartwatches for<br>identifying arrhythmias in children<br>Apple Watch ECG data from pediatric patients<br>Detected SVT (88%), VT (7%),<br>heart block (2.5%) & WCT (2.5%)"]
        
        iRhythm_ECG --> Gadaleta2023["<strong>Gadaleta et al.(Gadaleta et al., 2023)</strong><br>AF prediction from home ECG<br>Without arrhythmias present<br>Bi-LSTM for temporal pattern learning<br>AUC = 0.80 with 24-hour ECG"]
        iRhythm_ECG --> Tran2023["<strong>Tran et al.(Cardiol Cardiovasc Med, 2023)</strong><br>False AF alerts from smartwatches<br>Clinical implications"]
        
        WSIC_EHR --> Sekelj2021["<strong>Sekelj (Eur J Prev Cardiol, 2021)</strong><br>ML for undiagnosed AF<br>UK primary care validation<br>604,135 patients analyzed<br>AUROC 0.87, NPV 99.1%<br>More efficient than CHARGE-AF"]
        
        MIT_PTB_ECG --> Wang2021["<strong>Wang et al.(Computer Methods and Programs in Biomedicine, 2021)</strong><br>CNN with Non-Local Convolutional<br>Block Attention Module (NCBAM)<br>33-layer ResNet with attention mechanism<br>MIT-BIH: F1-score = 0.9664<br>PTB-XL: AUC = 0.9314"]
        
        YNHHS_MSHS_POCUS --> Oikonomous2025["<strong>Oikonomous et al.(The Lancet Digital Health,2025)</strong><br>AI for cardiomyopathy detection<br>POCUS-based screening<br>3D-ResNet18 CNN model<br>Detects HCM & ATTR-CM<br>Multi-label, view-agnostic approach<br>AUROC > 0.90 for both conditions"]
        
        Stanford_Echo_DT --> Ouyang2020["<strong>Ouyang et al.(Nature,2020)</strong><br>Video AI for cardiac function<br>Beat-to-beat assessment<br>EchoNet-Dynamic model<br>3D CNN + DeepLabv3 segmentation<br>10,030 echo videos analyzed<br>Real-time LVEF prediction"]
        
        MultiBio_Lab --> TamarApproo2020["<strong>TamarApproo et al.(Atherosclerosis, 2020)</strong><br>Integrated biomarkers & imaging<br>Multi-modal prediction"]
        
        MultiImg_SPECT --> Otaki2023["<strong>Otaki et al.(JACC Cardiovasc Imaging., 2023)</strong><br>XAI with SPECT for CAD diagnosis<br>Clinical deployment"]
        MultiImg_SPECT --> Popoescu2022["<strong>Popoescu et al.(Nature Cardiovascular Research, 2022)</strong><br>DL for arrhythmic death prediction<br>Scar analysis"]

        PESA_CV --> SanchezCabo2020["<strong>Sánchez-Cabo et al.(J Am Coll Cardiol., 2020)</strong><br>Elastic Net (EN) for predicting subclinical<br>atherosclerosis in young, asymptomatic individuals<br>High prediction performance (c-index 0.88)<br>Better at predicting early lesions often<br>missed by conventional risk scores"]
        
        %% New papers
        MIMIC_IV_Multimodal --> Ebrahimi2023["<strong>Ebrahimi et al.(2023)</strong><br>Google Research Team<br>87.37% AUROC on mortality prediction<br>6.6% improvement over SOTA<br>Effective with only 0.1% labeled data<br>Adaptable to cardiovascular risk prediction"]
        Chinese_Facial --> Lin2020["<strong>Lin et al.(The Lancet Digital Health, 2020)</strong><br>Deep learning for CAD detection<br>from facial photographs<br>AUC: 0.730; Sensitivity: 0.80<br>5,796 Chinese patients cohort<br>Non-invasive diagnostic approach"]
        Retinal_Photos --> Nusinovici2024["<strong>Nusinovici et al.(The Lancet Digital Health,2024)</strong><br>RetiPhenoAge: Deep learning biomarker<br>from retinal photographs<br>Validated in multiple cohorts<br>Robust predictor of mortality & morbidity<br>Novel non-invasive aging measurement"]
        CMERC_Retinal --> Lee2023["<strong>Lee et al.(Journal of the American Medical Informatics Association, 2023)</strong><br>Reti-CVD: AI for CVD risk stratification<br>Validated in 1,106 participants<br>First regulated AI-SaMD for CVD risk<br>Effective stratification of future risk<br>Regulatory approval in South Korea"]
        
        %% Additional papers from document
        Statewide_NLP --> Wang2015["<strong>Wang et al.(Int J Med Inform., 2015)</strong><br>NLP for CHF case finding<br>Analysis of unstructured clinical notes<br>Improved sensitivity over structured data<br>Comprehensive case finding approach<br>Statewide EMR implementation"]
        EHR_CD_Structured --> Zhang2021["<strong>Zhang et al.(JMIR Med Inform, 2021)</strong><br>1-Year risk prediction for cardiac dysrhythmia<br>EHR-based prospective algorithm<br>Early warning system for clinical workflows<br>Effective identification of at-risk patients"]
        Echo_RHD_Images --> Brown2023["<strong>Brown et al.(Journal of the American Heart Association, 2023)</strong><br>AI for rheumatic heart disease detection<br>Focus on mitral valve regurgitation<br>CNN with attention mechanisms<br>AUC of 0.93 comparable to experts<br>Potential for resource-limited settings"]
    end

    %% Custom styles for subgraphs
    classDef sectionStyle fill:#f5f5f5,stroke:#ddd,stroke-width:2px
    classDef problemStyle fill:#f9d5e5,stroke:#5b0e2d,stroke-width:2px,color:#333
    classDef paperSectionStyle fill:#e3f2fd,stroke:#ddd,stroke-width:2px
    
    %% Custom styles for nodes
    classDef problemNode fill:#f9d5e5,stroke:#5b0e2d,stroke-width:
  `;

  return (
    <div className="MermaidViewer">
      <MermaidDiagram>
        {diagram_text}
      </MermaidDiagram>
    </div>
  );
}

export default MermaidViewer;
