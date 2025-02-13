interface RowProps {
    rowName: string;
    rowData: any;
    onUpdate: (updatedRowData: any) => void;
}

export default function RowComponent({ rowName, rowData, onUpdate }: RowProps) {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const updatedConditions = e.target.value.split('; ').filter((cond) => cond.trim() !== '');
        onUpdate({ ...rowData, conditions: { ...rowData.conditions, Безусловно: updatedConditions } });
    };

    return (
        <div className="form__row">
            <h4 className="form__label">{rowName}</h4>
            <span className="form__condition">Безусловно</span>
            <textarea
                id={rowName}
                className="form__textarea"
                value={rowData.conditions?.Безусловно?.join('; ') || ''}
                onChange={handleChange}
            />
        </div>
    );
}
