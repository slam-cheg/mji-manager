import RowComponent from './RowComponent';

interface GroupProps {
  groupName: string;
  groupData: Record<string, any>;
  onUpdate: (updatedData: Record<string, any>) => void;
}

export default function GroupComponent({ groupName, groupData, onUpdate }: GroupProps) {
  return (
    <fieldset className="form__group">
      <h3 className="h3-title">{groupName}</h3>
      <div className="row-container">
        {Object.keys(groupData).map((rowName) => {
          const rowData = groupData[rowName];
          return (
            <RowComponent
              key={rowName}
              rowName={rowName}
              rowData={rowData}
              onUpdate={(updatedRowData) => {
                const updatedGroupData = { ...groupData, [rowName]: updatedRowData };
                onUpdate(updatedGroupData);
              }}
            />
          );
        })}
      </div>
    </fieldset>
  );
}
