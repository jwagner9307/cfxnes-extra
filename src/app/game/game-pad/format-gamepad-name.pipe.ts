import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatGamepadName',
  pure: true
})
export class FormatGamepadNamePipe implements PipeTransform {
  public transform(value: any): string {
    if (this.isEmpty(value)) {
      return '';
    }
    return value.replaceAll(/\s+/g, ' ');
  }

  isEmpty(value: any): boolean {
    return (
      (typeof value === 'undefined') ||
      (Array.isArray(value) && value.length === 0) ||
      (!Array.isArray(value) && (value === null || value === '' || value === 0))
    );
  }
}
