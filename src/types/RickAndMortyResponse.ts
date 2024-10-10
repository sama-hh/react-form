import {Character} from "./RickAndMortyCharacter.ts";

export type RickAndMortyResponse = {
    info: Info,
    results: Character[]
}

type Info = {
    count:	number,
    pages:	number,
    next: string,
    prev: string,
}