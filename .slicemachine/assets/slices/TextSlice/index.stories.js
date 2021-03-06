import MyComponent from '../../../../slices/TextSlice';

export default {
  title: 'slices/TextSlice'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Consectetur fugiat est ipsum sit cupidatat fugiat mollit sunt dolore eiusmod qui reprehenderit aliquip. Lorem eu mollit eiusmod eu ex. Dolor eiusmod deserunt exercitation enim officia nulla culpa dolore id deserunt laborum non.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TwoColumn = () => <MyComponent slice={{"variation":"twoColumn","name":"Two Column","slice_type":"text_slice","items":[],"primary":{"text":[{"type":"paragraph","text":"Reprehenderit et adipisicing sunt duis veniam id occaecat. Enim aliqua labore cillum reprehenderit et fugiat nulla. Laborum in duis duis.","spans":[]}]},"id":"_TwoColumn"}} />
_TwoColumn.storyName = 'Two Column'
