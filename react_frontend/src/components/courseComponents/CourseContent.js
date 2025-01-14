import React from 'react';
import { useParams } from 'react-router-dom';
import { useCourseDetail } from './useCourseDetail';

const CourseDetail = () => {
  const { courseId } = useParams();
  const { courseData, loading, error } = useCourseDetail(courseId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading course details.</p>;

  return (
    <div className=" mx-auto p-4 text-cyan-950 dark:bg-gray-800 dark:text-gray-100 md:pl-[270px] md:m-0 lg:mx-auto lg:px-[500px]">
      <h1 className="text-3xl font-bold mb-4 px-2">{courseData.course_name}</h1>
      <p className='text-justify p-2 dark:text-gray-300'>{courseData.course_description}</p>
      <div className="mb-6">
        {/* <h2 className="text-2xl font-semibold mb-2">Chapters</h2> */}
        {courseData.chapters_with_lessons.map((chapter, index) => (
          <div key={index} className="border p-4 mb-4 rounded-lg">
            <h3 className="text-xl font-bold">{chapter.chapter.chapter_name}</h3>
            <p className="text-gray-700 dark:text-gray-300">{chapter.chapter.chapter_description}</p>

            <div className="mt-4">
              {/* <h4 className="text-lg font-semibold">Lessons</h4> */}
              {chapter.lessons.map((lesson, lessonIndex) => (
                <div key={lesson.id} className="ml-4 mt-2">
                  <h5 className="text-gray-800 font-semibold text-xl">{`Lesson ${lessonIndex + 1}: ${lesson.lesson_name}`}</h5>
                  <p className="text-gray-700  dark:text-gray-300">{lesson.lesson_content}</p>
                  <p className='my-2 text-yellow-500'>Video: {lesson.video}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Quizzes</h2>
        {courseData.chapters_with_lessons_and_quizzes.map((chapter, index) => (
          <div key={index} className="border p-4 mb-4 rounded-lg">
            <h3 className="text-xl font-bold">{chapter.chapter.name}</h3>
            <div className="mt-4">
              <h4 className="text-lg font-semibold">Quizzes</h4>
              {chapter.quizzes.map((quiz) => (
                <div key={quiz.id} className="ml-4 mt-2">
                  <p className="text-gray-800">{quiz.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;
