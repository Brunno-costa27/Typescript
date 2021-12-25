

/**
 * name - string
 * duration - number
 * educator - string
 */

interface Course {

    name: string;
    duration?: number; // campo fica sendo opcional
    educator: string;
}

class CreateCourseService {

    execute({ duration = 9, educator, name }: Course) { // pode setar um valor por padrao
        console.log(name, duration, educator);
    }
}

export default new CreateCourseService();