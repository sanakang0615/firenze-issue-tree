import React from "react";
import {MermaidDiagram} from "@lightenna/react-mermaid-diagram";


function MermaidViewer() {
  const diagram_text= `
  flowchart LR
    %% Disease Scope Section
    subgraph DiseaseScope["1.Disease Scope"]
        GeneralCVD["General Cardiovascular Disease (CVD)"]
        SpecificDisease["Specific Diseases"]
        SpecificDisease --> HF["Heart Failure"]
        SpecificDisease --> AF["Atrial Fibrillation"]
        SpecificDisease --> CM["Cardiomyopathies"]
        SpecificDisease --> MI["Myocardial Infarction"]
        SpecificDisease --> CAD["Coronary Artery Disease"]
    end
    
    %% Task Type Section
    subgraph TaskType["2.Task Type"]
        RiskPred["Risk Prediction"]
        Mortality["Mortality Prediction"]
        
        HFDetection["Early Detection"]
        HFSubtype["Subtype Identification"]
        HFProg["Mortality Prediction"]
        HFFunc["Functional Status"]
        
        AFDetection["Early Screening"]
        AFRiskPred["Risk Prediction"]
        AFClassification["ECG Classification"]
        
        CMScreening["Early Screening"]
        
        MIMortality["Mortality Prediction"]
        
        CADDiagnosis["Disease Diagnosis"]
        
        GeneralCVD --> RiskPred
        GeneralCVD --> Mortality
        
        HF --> HFDetection
        HF --> HFSubtype
        HF --> HFProg
        HF --> HFFunc
        
        AF --> AFDetection
        AF --> AFRiskPred
        AF --> AFClassification
        
        CM --> CMScreening
        
        MI --> MIMortality
        
        CAD --> CADDiagnosis
    end
    
    %% Questions to Model MermaidViewerroach
    RiskPred --> Ensemble_RF
    RiskPred --> AutoML
    RiskPred --> LLM
    RiskPred --> XAI_Class
    RiskPred --> LGBM
    RiskPred --> CNNT
    Mortality --> CNNT
    Mortality --> TreeEnsemble
    HFDetection --> CNN_ECG
    HFDetection --> GBM
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
    
    %% Model MermaidViewerroach Section
    subgraph ModelMermaidViewerroach["3.Model"]
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
    end
    
    %% Model Development Section
    subgraph ModelDevelopment["4.Model MermaidViewerroach"]
        Ensemble_RF --> Ensemble_RF_Compare["Comparing Multiple Models"]
        AutoML --> AutoML_Novel["Novel Framework"]
        LLM --> LLM_Novel["Novel MermaidViewerlication"]
        XAI_Class --> XAI_Class_Novel["Novel Framework"]
        LGBM --> LGBM_Novel["Novel Framework"]
        CNNT --> CNNT_Novel["Novel Framework"]
        TreeEnsemble --> TreeEnsemble_Compare["Comparing Multiple Models"]
        CNN_ECG --> CNN_ECG_Novel["Novel Architecture"]
        GBM --> GBM_Novel["Novel MermaidViewerlication"]
        KMedoids --> KMedoids_Novel["Novel MermaidViewerroach"]
        DL_EHR --> DL_EHR_Novel["Novel Architecture"]
        BERT_NLP --> BERT_NLP_Novel["Novel MermaidViewerlication"]
        ResNet_CNN --> ResNet_CNN_Novel["Novel Architecture"]
        BiLSTM_ECG --> BiLSTM_ECG_Novel["Novel Architecture"]
        ML_Class --> ML_Class_Compare["Comparing Multiple Models"]
        CNN_Attention --> CNN_Attention_Novel["Novel Architecture"]
        CNN_US --> CNN_US_Novel["Novel Architecture"]
        Ensemble_Class --> Ensemble_Class_Compare["Comparing Multiple Models"]
        XAI_Imaging --> XAI_Imaging_Novel["Novel Framework"]
    end
    
    %% Dataset Section
    subgraph DatasetSection["5.Dataset (Public/Private)"]
        Ensemble_RF_Compare --> UKBiobank1["UK Biobank (Public)"]
        Ensemble_RF_Compare --> CPRD1["CPRD (Public)"]
        
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
        
        BiLSTM_ECG_Novel --> iRhythm["iRhythm Zio XT (Private)"]
        
        ML_Class_Compare --> WSIC["Whole Systems Integrated Care (Private)"]
        
        CNN_Attention_Novel --> MIT_PTB["MIT-BIH & PTB-XL (Public)"]
        
        CNN_US_Novel --> YNHHS_MSHS["Yale-New Haven & Mount Sinai (Private)"]
        CNN_US_Novel --> Stanford_Echo["Stanford Echocardiography (Public)"]
        
        Ensemble_Class_Compare --> Multi_Biomarker["Multi-center Biomarker (Private)"]
        
        XAI_Imaging_Novel --> Multi_Imaging["Multi-center Imaging (Private)"]
    end
    
    %% Data Type Section
    subgraph DataTypeSection["6.Data Type"]
        UKBiobank1 --> UKB1_CV["Clinical Variables"]
        CPRD1 --> CPRD1_CV["Clinical Variables"]
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
        iRhythm --> iRhythm_ECG["Single-lead ECG"]
        WSIC --> WSIC_EHR["Primary Care EHR"]
        MIT_PTB --> MIT_PTB_ECG["ECG Database"]
        YNHHS_MSHS --> YNHHS_MSHS_POCUS["POCUS Imaging"]
        Stanford_Echo --> Stanford_Echo_DT["Echo Video"]
        Multi_Biomarker --> MultiBio_Lab["Laboratory Data"]
        Multi_Imaging --> MultiImg_SPECT["SPECT Imaging"]
    end
    
    %% Papers Section
    subgraph Papers["7.Published Research"]
        UKB1_CV --> You2023["<strong>You et al.(2023)</strong> <br>Light GBM for 10-yr CVD risk<br>645 candidate variablesn<br>LR, RF, NN, GBM, SVM compared<br>UK Biobank CVD Risk Prediction (UKCRP)<br> Model including 10 variables"]
        CPRD1_CV --> Weng2017["<strong>Weng et al.(2017)</strong><br>NN for the first CVD event over 10-yr<br>8 core + 22 additional variables<br>RF, NN, GBM compared"]
        
        UKB2_CV --> Alaa2019["<strong>Alaa et al.(2019)</strong><br>Automated ML (AutoPrognosis)<br>473 variables"]
        
        MIMIC_EHR --> Wu2024["<strong>Wu et al.(2024)</strong><br>EHRAgent: Generalizable LLM<br>agent for EHR reasoning<br>Few-shot complex reasoning<br>Require only small amount of dataset<br>The 'potential' risk prediction<br>tasks based on EHRs"]
        UKB3_EHR --> Han2024["<strong>Han et al.(2024)</strong><br>GPT-4 for CVD risk prediction<br>MACE (Major Adverse Cardiovascular Events)<br>Cross-ethnic validation"]
        
        UCI_Tab --> Guleria2022["<strong>Guleria et al.(2022)</strong><br>XAI-driven SVM, LR, and Naive Bayes<br>Models for CVD classification<br>Feature importance analysis"]
        PAMF_Tab --> Ward2020["<strong>Ward et al.(2020)</strong><br>ASCVD Rick Prediction<br>Compared with ASCVD Risk Estimator<br>Includes 473 predictors"]
        BIDMC_Tab --> Sau2024["<strong>Sau et al.(2024)</strong><br>Risk of all-cause mortality<br>future ventricular arrhythmia, future atherosclerotic cardiovascular disease,<br>and future heart failure"]
        Duke_Lab --> Goldstein2016["<strong>Goldstein et al.(2017)</strong><br>ML for post-AMI mortality<br>Compares Regression-based ML,<br>Tree-based ML, and NN models"]
        
        MultiECG_ECG --> Dhingra2025["<strong>Dhingra et al.(2025)</strong><br>Heart failure hospitalization <br> stratification with 12-lead ECG images<br>Detected signs of LVSD <br> Compared with the PCP-HF model<br> Proposed a non-invasive MermaidViewerroach <br>Unlike blood biomarkers or structured clinical data<br>Multinational validation"]

        MaineHIE_HIE --> Duong2021["<strong>Duong et al.(2021)</strong><br>ML for new onset HF risk<br>Non-invasive prediction using EMR data<br>First HF prediction model based on HIE data<br>Dimensionality reduction using ICD-10 Subheaders"]
        
        MultiEHR_EHR --> Banerjee2023["<strong>Banerjee et al.(2023)</strong><br>HF subtypes via ML clustering<br>Compares KNN, Hierarchical, K-Medoids, Mixture-model clustering<br>Select k-medoids algorithm<br> 645 -> 87 Features<br>Added Genetic Validation"]
        
        BJH_EHR --> McGilvray2022["<strong>McGilvray et al.(2022)</strong><br>Decompensation or mortality prediction<br>3 LSTM layers for temporal analysis of vital signs and lab data<br>1 Dense layer for static patient characteristics<br>Sigmoid activation function to predict severe decompensation within one year<br>Outperforms Ejection Fraction (EF) in predictive performance"]
        
        YNHHS_Text --> Adejumo2024["<strong>Adejumo et al.(2024)</strong><br>A model extracting symptom and <br>activity-related information based on NYHA functional classification<br>Handles unstructured data better than traditional SVM- and RF-based n-gram models<br>Classifies HF symptoms during activity or rest<br>Uses SHAP for interpretability"]
        
        MayoECG_ECG --> Attia2021["<strong>Attia et al.(2021)</strong><br>Identifies AF patients in Normal Sinus Rhythm (NSR)<br>Uses 8 independent leads (I, II, V1-V6) from 10-second 12-lead ECG"]
        MayoECG_ECG --> Rabinstein2021["<strong>Rabinstein et al.(2021)</strong><br>Undiagnosed AF in patients with Embolic Stroke of Unknown Source (ESUS)<br>Compares AI-ECG scores with long-term rhythm monitoring outcomes<br>A potential screening tool for prolonged heart monitoring"]
        MayoECG_ECG --> Jo2021["Jo et al.(2021)<br>XAI for AF detection with ECG<br>Explainable model"]
        
        iRhythm_ECG --> Gadaleta2023["Gadaleta et al.(2023)<br>AF prediction from home ECG<br>Without arrhythmias present"]
        iRhythm_ECG --> Tran2023["Tran et al.(2023)<br>False AF alerts from smartwatches<br>Clinical implications"]
        
        WSIC_EHR --> Sekelj2021["Sekelj (2021)<br>ML for undiagnosed AF<br>UK primary care validation"]
        
        MIT_PTB_ECG --> Wang2021["Wang et al.(2021)<br>CNN attention module for ECG<br>Automated ECG classification"]
        
        YNHHS_MSHS_POCUS --> Oikonomous2025["Oikonomous et al.(2025)<br>AI for cardiomyopathy detection<br>POCUS-based screening"]
        Stanford_Echo_DT --> Ouyang2020["Ouyang et al.(2020)<br>Video AI for cardiac function<br>Beat-to-beat assessment"]
        
        MultiBio_Lab --> Arzanipour2024["Arzanipour (2024)<br>Feature importance & causal inference<br>Causal relationships in CVD"]
        MultiBio_Lab --> TamarMermaidVieweroo2020["TamarMermaidVieweroo et al.(2020)<br>Integrated biomarkers & imaging<br>Multi-modal prediction"]
        
        MultiImg_SPECT --> Otaki2023["Otaki et al.(2023)<br>XAI with SPECT for CAD diagnosis<br>Clinical deployment"]
        MultiImg_SPECT --> Popoescu2022["Popoescu et al.(2022)<br>DL for arrhythmic death prediction<br>Scar analysis"]
    end

    %% Custom styles for subgraphs
    classDef sectionStyle fill:#f5f5f5,stroke:#ddd,stroke-width:2px
    classDef problemStyle fill:#f9d5e5,stroke:#5b0e2d,stroke-width:2px,color:#333
    classDef paperSectionStyle fill:#e3f2fd,stroke:#ddd,stroke-width:2px
    
    %% Custom styles for nodes
    classDef problemNode fill:#f9d5e5,stroke:#5b0e2d,stroke-width:2px,color:#333
    classDef answerNode fill:#e3f2fd,stroke:#0d47a1,stroke-width:1px
    classDef modelMermaidViewerroachNode fill:#fff8e1,stroke:#ff6f00,stroke-width:1px
    classDef modelDevNode fill:#ffe0b2,stroke:#e65100,stroke-width:1px
    classDef datasetNode fill:#d1c4e9,stroke:#4527a0,stroke-width:1px
    classDef dataTypeNode fill:#e8f5e9,stroke:#1b5e20,stroke-width:1px
    classDef paperNode fill:#e8eaf6,stroke:#1a237e,stroke-width:1px
    classDef you2023Style stroke:#D32F2F,stroke-width:2px;
    classDef Han2024Style stroke:#D32F2F,stroke-width:2px;
    
    %% MermaidViewerly styles to sections
    class DiseaseScope,TaskType,ModelMermaidViewerroach,ModelDevelopment,DatasetSection,DataTypeSection sectionStyle
    class Papers paperSectionStyle
    class You2023 you2023Style;
    class Han2024 Han2024Style;
    
    %% MermaidViewerly styles to nodes
    class GeneralCVD,SpecificDisease,HF,AF,CM,MI,CAD,RiskPred,Mortality,HFDetection,HFSubtype,HFProg,HFFunc,AFDetection,AFRiskPred,AFClassification,CMScreening,MIMortality,CADDiagnosis answerNode
    class Ensemble_RF,AutoML,LLM,XAI_Class,LGBM,CNNT,TreeEnsemble,CNN_ECG,GBM,KMedoids,DL_EHR,BERT_NLP,ResNet_CNN,BiLSTM_ECG,ML_Class,CNN_Attention,CNN_US,Ensemble_Class,XAI_Imaging modelMermaidViewerroachNode
    class Ensemble_RF_Compare,AutoML_Novel,LLM_Novel,XAI_Class_Novel,LGBM_Novel,CNNT_Novel,TreeEnsemble_Compare,CNN_ECG_Novel,GBM_Novel,KMedoids_Novel,DL_EHR_Novel,BERT_NLP_Novel,ResNet_CNN_Novel,BiLSTM_ECG_Novel,ML_Class_Compare,CNN_Attention_Novel,CNN_US_Novel,Ensemble_Class_Compare,XAI_Imaging_Novel modelDevNode
    class UKBiobank1,UKBiobank2,UKBiobank3,CPRD1,MIMIC,UCIHeart,PAMF,BIDMC,DukeEHR1,ulti_ECG1,MaineHIE,Multi_EHR1,BJH,YNHHS1,Multi_ECG1,MayoECG,iRhythm,WSIC,MIT_PTB,YNHHS_MSHS,Stanford_Echo,Multi_Biomarker,Multi_Imaging datasetNode
    class UKB1_CV,CPRD1_CV,UKB2_CV,MIMIC_EHR,UKB3_EHR,UCI_Tab,PAMF_Tab,BIDMC_Tab,Duke_Lab,MultiECG_ECG,MaineHIE_HIE,MultiEHR_EHR,BJH_EHR,YNHHS_Text,MayoECG_ECG,iRhythm_ECG,WSIC_EHR,MIT_PTB_ECG,YNHHS_MSHS_POCUS,Stanford_Echo_DT,MultiBio_Lab,MultiImg_SPECT dataTypeNode
    class Weng2017,You2023,Alaa2019,Wu2024,Han2024,Guleria2022,Ward2020,Sau2024,Banerjee2023,Wang2021,Goldstein2016,Dhingra2025,Yao2021,Duong2021,McGilvray2022,Adejumo2024,Attia2021,Rabinstein2021,Jo2021,Gadaleta2023,Tran2023,Sekelj2021,Oikonomous2025,Ouyang2020,Arzanipour2024,TamarMermaidVieweroo2020,Otaki2023,Popoescu2022 paperNode
           
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
