import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

// thiss will be a "factory decorator"
export function bodyValidator(...keys: string[]) {
  return function(targer: any, key: string, desc:PropertyDescriptor) {
    Reflect.defineMetadata(
      MetadataKeys.validator,
      keys, 
      targer,
      key
    )
  }
}

