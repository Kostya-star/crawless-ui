import { ReactComponent as SelectionZeroIcon } from 'assets/selections0.svg';
import { ReactComponent as SelectionOneIcon } from 'assets/selections1.svg';
import { ReactComponent as SelectionTwoIcon } from 'assets/selections2.svg';
import { ReactComponent as SelectionThreeIcon } from 'assets/selections3.svg';
import { ReactComponent as SelectionFourIcon } from 'assets/selections4.svg';
import { TaskSelectionItem } from './TaskSelectionItem/TaskSelectionItem';

const selections = [
  {
    title: 'selection01',
    svg: SelectionZeroIcon,
    code: 'div>p>meta.content-exists()',
    imgSrc: 'Image source',
    singleEl: 'Single element',
  },
  {
    title: 'selection01',
    svg: SelectionOneIcon,
    code: 'div>p>meta.content-exists()',
    imgSrc: 'Image source',
    singleEl: 'Single element',
  },
  {
    title: 'selection01',
    svg: SelectionTwoIcon,
    code: 'div>p>meta.content-exists()',
    imgSrc: 'Image source',
    singleEl: 'Single element',
  },
  {
    title: 'selection01',
    svg: SelectionThreeIcon,
    code: 'div>p>meta.content-exists()',
    imgSrc: 'Image source',
    singleEl: 'Single element',
  },
  {
    title: 'selection01',
    svg: SelectionFourIcon,
    code: 'div>p>meta.content-exists()',
    imgSrc: 'Image source',
    singleEl: 'Single element',
  },
];

export const TasksSelections = () => {
  return (
    <section className="tasks__selections">
      <ul className="tasks__selections__list">
        {selections.map((item, ind) => {
          return (
            <TaskSelectionItem key={Date.now() + ind} item={item} ind={ind} />
          );
        })}
      </ul>
    </section>
  );
};
