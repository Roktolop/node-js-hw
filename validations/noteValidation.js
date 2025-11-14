import { Joi, Segments } from 'celebrate';
import { TAGS } from '../src/constants/tags.js';


export const getNoteSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(5).max(20).default(10),
    tag: Joi.string().valid(...TAGS),
    search: Joi.string().min(1).max(100).allow(''),
  })
};
