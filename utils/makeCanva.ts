export default function makeCanva(value: number){
    return {canvas: [
        {
            type: 'rect',
            x: 0,
            y: 0,
            w: value,
            h: 2,
            color: '#AEECA8',
        },{
            type: 'rect',
            x: value,
            y: 0,
            w: 100-value,
            h: 2,
            color: '#808080',
        }
    ]}
}