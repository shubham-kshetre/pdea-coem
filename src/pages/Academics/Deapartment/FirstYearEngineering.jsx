import React from 'react';
import DepartmentTemplate from '../../../PageTemplate/DepartmentTemplate';
import { firstyear } from '../../../data/hod';
import { firstYearDepartmentData } from '../../../data/department'

const FirstYear = () => {

  return (
    <DepartmentTemplate 
      cardsData={firstyear}
      title={firstYearDepartmentData.title} 
      description={firstYearDepartmentData.description}
      teachers={firstYearDepartmentData.teachers}
      events={firstYearDepartmentData.events}
      galleryImages={firstYearDepartmentData.galleryImages}
      
      />
  );
};

export default FirstYear;
