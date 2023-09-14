export interface Info {
 id:number
 name:string
}

export interface Member extends Info {
 born:string
 gender:string
 age:string
 place_at_born:string
 occupations:string
 years_active:string
 image:string
}

export interface Song {
 name:string
 url:string
}

export interface Disk extends Info {
    year:string
    songs: Song[]
    image_front:string
    image_back:string
}

//these variables need be the same that we recive from the method post 
export type exMember = Member