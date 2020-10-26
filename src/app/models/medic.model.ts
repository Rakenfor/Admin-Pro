import { Hospital } from './hospital.model';
import { User } from './user.model';
export class Medic{
    constructor(
        public name?: string,
        public _id?: string,
        public user?: User,
        public hospital?: Hospital,
        public img?: string

    ){}
}