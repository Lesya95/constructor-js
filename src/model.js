import image1 from './assets/01.jpg'
import image2 from './assets/02.jpg'
import image3 from './assets/03.jpg'
import {TitleBlock, ImageBlock, TextBlock, TextColumnBlock} from './classes/blocks'
import { css } from './utils'

let contentTextBlock = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque omnis vitae ipsum quibusdam sint sunt placeat eveniet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque omnis vitae ipsum quibusdam sint sunt placeat eveniet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque omnis vitae ipsum quibusdam sint sunt placeat eveniet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque omnis vitae ipsum quibusdam sint sunt placeat eveniet Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid neque omnis vitae ipsum quibusdam sint sunt placeat eveniet, et unde.'

let textArray = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores ratione blanditiis natus temporibus recusandae optio facilis iste, voluptatum obcaecati dolore? Beatae, sed quae excepturi voluptatum repudiandae rem ipsum. Maiores quibusdam delectus nisi reiciendis, maxime aliquid, voluptatem aut quis quam assumenda labore dolor in earum nihil possimus iste repudiandae tempore ratione. Exercitationem, possimus nostrum. Provident eum quos ex? In ipsam culpa quasi iure quisquam mollitia eligendi aspernatur quam, beatae excepturi illo corporis odio exercitationem inventore dolores modi vel dolor, soluta dolore nulla iste repellendus! Delectus perferendis autem eius nemo aut voluptatibus, ad non molestias, nisi corrupti quam praesentium consectetur dolorum. Magnam soluta odit corporis vitae ut reprehenderit pariatur error, ad at deserunt, fuga libero animi nemo aperiam assumenda tempore et obcaecati facere atque beatae! Fugiat eum debitis veniam nihil. Dolor quaerat beatae nostrum expedita, placeat possimus facere vel quam reprehenderit ipsum quisquam nihil architecto ullam. Assumenda reprehenderit in cum et.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores ratione blanditiis natus temporibus recusandae optio facilis iste, voluptatum obcaecati dolore? Beatae, sed quae excepturi voluptatum repudiandae rem ipsum. Maiores quibusdam delectus nisi reiciendis, maxime aliquid, voluptatem aut quis quam assumenda labore dolor in earum nihil possimus iste repudiandae tempore ratione. Exercitationem, possimus nostrum. Provident eum quos ex? In ipsam culpa quasi iure quisquam mollitia eligendi aspernatur quam, beatae excepturi illo corporis odio exercitationem inventore dolores modi vel dolor, soluta dolore nulla iste repellendus! Delectus perferendis autem eius nemo aut voluptatibus, ad non molestias, nisi corrupti quam praesentium consectetur dolorum. Magnam soluta odit corporis vitae ut reprehenderit pariatur error, ad at deserunt, fuga libero animi nemo aperiam assumenda tempore et obcaecati facere atque beatae! Fugiat eum debitis veniam nihil. Dolor quaerat beatae nostrum expedita, placeat possimus facere vel quam reprehenderit ipsum quisquam nihil architecto ullam. Assumenda reprehenderit in cum et.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores ratione blanditiis natus temporibus recusandae optio facilis iste, voluptatum obcaecati dolore? Beatae, sed quae excepturi voluptatum repudiandae rem ipsum. Maiores quibusdam delectus nisi reiciendis, maxime aliquid, voluptatem aut quis quam assumenda labore dolor in earum nihil possimus iste repudiandae tempore ratione. Exercitationem, possimus nostrum. Provident eum quos ex? In ipsam culpa quasi iure quisquam mollitia eligendi aspernatur quam, beatae excepturi illo corporis odio exercitationem inventore dolores modi vel dolor, soluta dolore nulla iste repellendus! Delectus perferendis autem eius nemo aut voluptatibus, ad non molestias, nisi corrupti quam praesentium consectetur dolorum. Magnam soluta odit corporis vitae ut reprehenderit pariatur error, ad at deserunt, fuga libero animi nemo aperiam assumenda tempore et obcaecati facere atque beatae! Fugiat eum debitis veniam nihil. Dolor quaerat beatae nostrum expedita, placeat possimus facere vel quam reprehenderit ipsum quisquam nihil architecto ullam. Assumenda reprehenderit in cum et.'
]

export const model = [
  new TitleBlock('HI FRIEND', {
    tag: 'h1',
    styles: css({
      background: '#aee4cb',
      color: '#fff',
      'text-align': 'center',
      padding: '20px',
      'border-bottom': '1px solid #fff',
    }) 
  }),
  new ImageBlock([image1, image2, image3], {
    styles: 'border-bottom: 1px solid #fff;',
    alt: 'mi mi mi',
    imageStyle: 'width: 33.3333333%',
  }),
  new TextBlock(contentTextBlock, {
    styles: 'background: #c4c4f1; color: #333; font-weight: 700; padding: 20px;  border-bottom: 1px solid #fff; line-height: 28px'
  }),
  new TextColumnBlock(textArray, {
    styles: 'padding: 20px; background: #afa884; color: #333; font-size: 16px; border-bottom: 1px solid #fff; line-height: 28px; font-weight: 500;'
  }),
]