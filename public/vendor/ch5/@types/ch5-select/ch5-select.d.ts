import "hammerjs";
import { Ch5Common } from "../ch5-common/ch5-common";
import { TCh5SelectIconPosition, TCh5SelectMode } from "../_interfaces/ch5-select/types";
import { TCh5CommonInputFeedbackModes } from "../_interfaces/ch5-common-input/types/t-ch5-common-input-feedback-modes";
import HtmlCallback from "../ch5-common/utils/html-callback";
import { ICh5SelectAttributes } from "../_interfaces/ch5-select/i-ch5-select-attributes";
export declare class Ch5Select extends Ch5Common implements ICh5SelectAttributes {
    static MAX_SIZE: number;
    static MODE_VALUES: TCh5SelectMode[];
    static FEEDBACK_MODE_VALUES: TCh5CommonInputFeedbackModes[];
    static DEFAULT_SIGNAL_VALUE_SYNC_TIMEOUT: number;
    static PLACEHOLDER_DEFAULT: string;
    static CH5_SELECT_MAIN_STYLE_CLASS: string;
    static OPENED_STYLE_CLASS: string;
    static MAIN_PANEL_STYLE_CLASS: string;
    static SELECTED_ITEMS_STYLE_CLASS: string;
    static MODE_PANEL_STYLE_CLASS: string;
    static MODE_COMBO_STYLE_CLASS: string;
    static PANEL_ITEMS_STYLE_CLASS: string;
    static COMBO_TRIGGER_STYLE_CLASS: string;
    static PANEL_ITEM_STYLE_CLASS: string;
    static SELECTION_IN_PROGRESS_STYLE_CLASS: string;
    static ITEM_SELECTED_STYLE_CLASS: string;
    iconPosition: TCh5SelectIconPosition;
    mainPanel: HTMLElement;
    selectedOptionsPanel: HTMLElement;
    selectPanel: HTMLElement;
    comboTrigger: HTMLElement;
    templateVarsData: object[];
    _selectionTimeout: number | null;
    _multiselectionTimeout: number | null;
    receiveStateSizeSubscription: string;
    receiveStateValueSubscription: string;
    receiveStateTemplateVarsSubscription: string;
    private _optionTemplateHTML;
    private _lastReceivedSignalValue;
    private _cleanValue;
    private _lastSelectedOptIdx;
    private _size;
    private _multiselect;
    private _selectedValue;
    private _selectedValues;
    private _cleanValues;
    private _multiselectedValuesMap;
    private _panelScrollHeight;
    private _minWidth;
    private _maxWidth;
    private _minHeight;
    private _maxHeight;
    private _resize;
    private _mode;
    private _feedbackMode;
    private _signalValueSyncTimeout;
    private _indexId;
    private _receiveStateValue;
    private _receiveStateSize;
    private _receiveStateTemplateVars;
    private _sendEventOnFocus;
    private _sendEventOnChange;
    private _dirty;
    private _ondirtyCallback;
    private _oncleanCallback;
    private _noneSelectedPrompt;
    private _comboTriggerHammer;
    constructor();
    ondirtyCallback: HtmlCallback | {};
    ondirty: {};
    oncleanCallback: HtmlCallback | {};
    onclean: {};
    connectedCallback(): void;
    disconnectedCallback(): void;
    unsubscribeFromSignals(): void;
    private initializations();
    private _initOptionTemplate();
    private _startReadyObserver();
    private _validateTmplFirstElAsCh5SelectOption(tmpl);
    private _updateCh5SelectDimensions();
    private _createMainPanel();
    private _createSelectPanel();
    private _createComboTrigger();
    private _handleSelectPanelToggle();
    private _isOpened();
    openSelectPanel(): void;
    closeSelectPanel(): void;
    static readonly observedAttributes: string[];
    attributeChangedCallback(attr: string, oldValue: string, newValue: string): void;
    protected initAttributes(): void;
    protected attachEventListeners(): void;
    protected removeEventListeners(): void;
    size: string | number;
    multiselect: boolean;
    selectedValue: string | number;
    selectedValues: number[];
    panelScrollHeight: any;
    minWidth: string | null;
    maxWidth: string | null;
    minHeight: string | null;
    maxHeight: string | null;
    resize: boolean;
    mode: TCh5SelectMode;
    private _isPlain();
    private _isPanel();
    feedbackMode: TCh5CommonInputFeedbackModes;
    signalValueSyncTimeout: string | number;
    indexId: string | null;
    receiveStateValue: string | null;
    receiveStateSize: string | null;
    receiveStateTemplateVars: string | null;
    sendEventOnFocus: string | null;
    sendEventOnChange: string | null;
    private _getStyleWidthProps();
    private _getStyleHeightProps();
    private _getCh5SelectOpenTriggerIcon();
    private _getCssDimensionsUsingParent(onlyWidth?);
    private _updateSelectPanelScrollHeight();
    private _applyResize();
    private _isValidElement(el);
    private _addMainClass();
    private _updateModeClass();
    private _getOptionTemplateWithReplacedVars(optHTML, index);
    private _getProcessedOptionEl(index);
    getOptionsListSize(): number;
    buildOptions(startingIndex?: number): void;
    removeLastOptsFromList(startingIndex: number, oldOptsNr: number): void;
    renderCh5SelectOptions(): void;
    textReplace(fullText: string, toReplace: string, replaceWith: string, replaceGlobal: boolean): string;
    private _getTemplateVarsFromDefaultConfig();
    protected hasTemplateVars(): boolean;
    protected getOptionTemplateVars(index: number): object | null;
    private _unsubscribeOldSignal(sigName, sigSubsKey, type);
    private _handleReceiveSignalSize();
    private _handleReceiveSignalTemplateVars();
    private _setSelectionTimeoutCallback(newSelectedVal);
    private _handleOptionSelected(e);
    private _multiselectValuesAreAllConfirmed();
    private _optionsHaveReceiveSignalSelectedAttr();
    private _setMultiselectionTimeoutCallback();
    private _multiselectionTimeoutCallback();
    private _isCleanValue(optionIdx);
    private _updateMultiselectedValuesMap(setSelected, optionIdx, confirmed);
    private _hasFeedbackModeSubmit();
    private _fireChangeEvent(newVal, oldVal?);
    private _fireDirtyOrCleanEvent();
    private sendOnChangeSignal(selectedIdx);
    private _markOptionAsSelected(selectedIndex, ch5SelectOption?);
    private _setOptionSelected(opt);
    private _unsetOptionSelected(opt);
    private _getOptionElByIdx(idx);
    private _handleReceiveSignalValue();
    private _addToSelectedOptions(optionIdx);
    private _removeFromSelectedOptions(optionIdx);
    submit(): void;
    private _triggerOptSendSignalOnClick(optIdx);
    dirty: boolean;
    getDirty(): boolean;
    reset(): void;
    setValue(value: number | number[]): void;
    getValue(): number | number[];
    lastReceivedSignalValue: number;
    private _updateSingleSelectionInMainPanel();
    noneSelectedPrompt: string | null;
    private _updateMultiSelectionInMainPanel();
    private _isFocused();
    private _onFocus(e);
    private _onBlur(e);
    private _sendFocusSignal(focus);
    getCssClassDisabled(): string;
    private _setSelectedClass(set);
    private _updateOptionsDirAttr();
}