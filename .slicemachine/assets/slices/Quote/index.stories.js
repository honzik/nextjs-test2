import MyComponent from '../../../../slices/Quote';

export default {
  title: 'slices/Quote'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"quote","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"Eu duis consequat consequat ipsum incididunt aliquip enim amet aliqua proident dolor est est minim.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _QuoteReference = () => <MyComponent slice={{"variation":"quoteReference","name":"Quote Reference","slice_type":"quote","items":[],"primary":{"quotetext":[{"type":"paragraph","text":"In aliquip ipsum irure esse.","spans":[]}],"reference":[{"type":"paragraph","text":"Aliquip cupidatat Lorem anim.","spans":[]}]},"id":"_QuoteReference"}} />
_QuoteReference.storyName = 'Quote Reference'
