/* eslint-disable prettier/prettier */

import ConnectDb from '../../../../Server/middleware/connection';
import type { NextApiRequest, NextApiResponse } from 'next';
import Education from '../../../../Server/Models/Student/Education/Education';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == `POST`) {
    const edu = await Education.findOne({_id:req.body.id});
    res.status(200).json({ edu });
  } else if (req.method == `PATCH`){
    const edu = await Education.findOneAndUpdate({_id:req.body.id}
      ,{
        QualificationLevel: req.body.Qualilevel,
        QualificationStatus: req.body.degStatus,
        StartDate: req.body.degstart,
        EndDate: req.body.endDeg,
        PersonOnDegree: req.body.NameDeg,
        Country: req.body.Country,
        InstituteName: req.body.InsituteName,
        ProgramTitle: req.body.Program,
        UniversityNameOnDegree: req.body.InsistuteNameOnDegree,
        CampusTitle: req.body.Campus,
        DepartmentTitle: req.body.Department,
        DegreeType: req.body.DegreeType,
        SessionType: req.body.Session,
        AreaOfResearch: req.body.AreaofSearch,
        RollNumber: req.body.RollNo,
      });
    res.status(200).json({ edu });
  }else{
    res.status(400).json(`Method Not Found`);
  }
};
export default ConnectDb(handler);
