export interface Report {
    student_name:                  string;
    student_admission_number:      string;
    student_photo:                 string;
    exam_name:                     string;
    class_name:                    string;
    principals_remarks:            string;
    class_teachers_remarks:        string;
    mean_grade:                    string;
    overall_position:              Position;
    stream_position:               Position;
    mean_marks:                    MeanMarks;
    subject_results:               SubjectResult[];
    student_performance_over_time: StudentPerformanceOverTime[];
}

export interface MeanMarks {
    deviation: number;
    avg_score: number;
}

export interface Position {
    deviation:       number;
    position_out_of: number;
    position:        number;
}

export interface StudentPerformanceOverTime {
    exam_name: string;
    avg_score: number;
}

export interface SubjectResult {
    rank_out_of:  number;
    subject_name: string;
    deviation:    number;
    grade:        string;
    comment:      string;
    rank:         number;
    score:        number;
}
