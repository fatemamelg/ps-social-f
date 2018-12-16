import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(messages: any, term: any): any {
    // if undefined
    if (term === undefined) return messages
    // else
    return messages.filter(function(message){
      return message.name.toLowerCase().includes(term.toLowerCase())
    })
  }

}
