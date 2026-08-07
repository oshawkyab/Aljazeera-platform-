import React from 'react';
import { Book, HelpCircle } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import CourseItem from '@/components/student/CourseItem';
import courses from "@/data/courses.json"
import HeaderProfile from '@/components/shared/HeaderProfile';

// Dynamic Icon Component
const DynamicIcon = ({ name, className }) => {
  // تحويل أول حرف لـ Uppercase لأن Lucide بتستخدم PascalCase (مثال: code -> Code)
  const iconName = name ? name.charAt(0).toUpperCase() + name.slice(1) : '';
  const IconComponent = LucideIcons[iconName] || HelpCircle;

  return <IconComponent className={className} />;
};

const MaterialPage = () => {
  return (
    <div dir="rtl" className="p-4 md:p-6">
      <HeaderProfile title="كورساتي" icon={<Book className="h-8 w-8" />} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mt-10">
        {courses.map((course) => (
          <CourseItem
            key={course.courseCode}
            name={course.title}
            icon={<DynamicIcon name={course.icon} className="h-16 w-16 text-blue-700" />}
            id={course.courseCode}
            prof={course.professor.name}
          />
        ))}
      </div>
    </div>
  );
};

export default MaterialPage;