export interface AcademicTraining {

    id : number;
    created : Date;
    modified : Date;
    uuid : string;
    version : number;
    branchId : number;
    hasActivities : boolean;
    hasDocuments :  boolean;
    hasAlerts :  boolean;
    hasPhoto :  boolean;
    updatePhoto :  boolean;
    className :  string;
    objectType : string;
    code : string;
    createdby : string;
    modifiedby : string;
    center : string;
    date_start : Date;
    date_end : Date;
    observation : string;
    id_person :  number;
    id_level :  number;
    specialty : string;

}